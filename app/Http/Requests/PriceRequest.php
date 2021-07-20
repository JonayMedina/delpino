<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class PriceRequest extends FormRequest
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
        return [
            'amount' => 'required|string|between:2,100',
            'currency_id' => 'required|exists:currencies,id',
            'notes' => 'nullable|string',
        ];
    }

    public function attributes()
    {
        return [
            'amount' => 'Precio de Venta',
            'currency_id' => 'Moneda',
            'notes' => 'Descripcion',
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
