<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        switch ($this->method()) {
            case 'PUT':
                $rules = [
                    'name' => 'required|string|between:2,100',
                    'email' => 'required|string|email|max:100|unique:users,email,' . $this->customer->email,
                    'dni' => 'nullable|string|between:2,100|unique:users,dni,' . $this->customer->dni,
                    'phone' => 'nullable|string',
                    'birthday' => 'nullable|date',
                ];
                break;

            default:
                $rules = [
                    'email' => 'required|string|email|max:100|unique:users',
                    'name' => 'required|string|between:2,100',
                    'dni' => 'nullable|string|between:2,10',
                    'phone' => 'nullable|string',
                    'birthday' => 'nullable|date',
                    'password' => 'required|string|confirmed|min:6',
                ];
                break;
        }

        return $rules;
    }

    public function attributes()
    {
        return [
            'name' => 'Nombre completo',
            'email' => 'Correo',
            'phone' => 'Telefono',
            'birthday' => 'Fecha de Nacimiento',
            'password' => 'Contraseña',
            'password_confirmation' => 'Confirmación de Contraseña',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();

        throw new HttpResponseException(
            response()->json(
                ['errors' => $errors],
                422
            )
        );
    }
}
