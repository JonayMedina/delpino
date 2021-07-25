<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DetailPaymentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'payment_id' => $this->payment_id,
            'bank_name' => ($this->bank_name) ? $this->bank_name : '',
            'bank_account' => $this->bank_account,
            'name' => $this->name,
            'dni' => $this->dni,
            'payed_at' => $this->payed_at,
            'description' => $this->description,
            'active' => $this->active,
            'created_at' => $this->created_at->format('H:i:s d/m/Y'),
            'amount_formated' => number_format($this->amount, 2, ',', '.'),
        ];
    }
}
