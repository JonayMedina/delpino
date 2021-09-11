<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserCustomerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules = [
            'name' =>       'required|string|between:2,100',
            'email' =>      'required|string|email|max:100|unique:users' . $this->user->id . ',id',
            'dni' =>        'required|string|between:6,10|unique:customers,dni',
            'birthdate' =>  'nullable|date',
            'phone' =>      'nullable|string'
        ];

        if ($this->method() == 'POST') {
            $rules['password'] = 'required|string|confirmed|min:6';
            $rules['email'] = 'required|string|email|max:100|unique:users';
        }

        return $rules;
    }

    public function attributes()
    {
        return [
            'name' => 'Nombre',
            'dni' => 'Cedula o Dni',
            'email' => 'Correo',
            'birthdate' => 'Fecha de Nacimiento',
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
