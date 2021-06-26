<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class BankRequest extends FormRequest
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
                    'bank_name' => 'required|string|between:2,100',
                    'account_holder' => 'required|string|between:2,100',
                    'account_code' => 'required|string|between:2,100|unique:banks,account_code,' . $this->bank->id,
                    'account_email' => 'nullable|string|email|max:100',
                    'account_dni' => 'nullable|string|between:2,20',
                    'account_phone' => 'nullable|string',
                    'currency_id' => 'required|exists:App\Models\Currency,id',
                ];
                break;

            default:
                $rules = [
                    'bank_name' => 'required|string|between:2,100',
                    'account_holder' => 'required|string|between:2,100',
                    'account_code' => 'required|string|between:2,100|unique:banks|',
                    'account_email' => 'nullable|string|email|max:100',
                    'account_dni' => 'nullable|string|between:2,20',
                    'account_phone' => 'nullable|string',
                    'currency_id' => 'required|exists:App\Models\Currency,id',
                ];
                break;
        }

        return $rules;
    }

    public function attributes()
    {
        return [
            'bank_name' => 'Nombre',
            'account_holder' => 'Nombre Propietario de la cuenta',
            'account_email' => 'Correo',
            'phone' => 'Telefono',
            'account_code' => 'Fecha de Nacimiento',
            'account_dni' => 'C.I./ D.n.i del Propietario de la cuenta',
            'currency_id' => 'Moneda de La Cuenta',
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
