<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class Payment extends JsonResource
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
            'file' => $this->file,
            'bank_id' => $this->bank_id,
            'bank' => $this->bank,
            'customer_name' => $this->customer->name,
            'customer_id' => $this->customer_id,
            'detailpay' => $this->detailpay,
            'recipient' => $this->recipient,
            'recipient_id' => $this->recipient_id,
            'description' => $this->description,
            'operation_code' => $this->operation_code,
            'operation_method' => $this->operation_method,
            'amount' => $this->amount,
            'amount_iso' => $this->amount_iso,
            'pay' => $this->pay,
            'pay_iso' => $this->pay_iso,
            'active' => $this->active,
            'created_at' => $this->created_at->format('H:i:s d/m/Y'),
            'amount_formated' => number_format($this->amount, 2, ',', '.'),
            'pay_formated' => number_format($this->pay, 2, ',', '.'),
        ];
    }
}
