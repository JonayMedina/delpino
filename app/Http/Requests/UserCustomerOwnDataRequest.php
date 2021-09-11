<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;

class UserCustomerOwnDataRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $auth = Auth::user();
        $rules = [
            'name' =>       'required|string|between:2,100',
            'email' =>      'required|string|email|max:100|unique:users,email,' . $auth->id . ',id',
            'dni' =>        'nullable|string|between:6,10|unique:customers,dni,' . $auth->customer->id . ',id',
            'birthdate' =>  'nullable|date',
            'phone' =>      'nullable|string'
        ];

        if ($this->method() == 'POST') {
            $rules['password'] = 'required|string|confirmed|min:6';
            $rules['email'] = 'required|string|email|max:100|unique:users,email';
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
