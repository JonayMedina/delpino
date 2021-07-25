<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'amount' => $this->amount,
            'amount_formated' => number_format($this->amount, 2, ',', '.'),
            'currency_id' => $this->currency_id,
            'iso' => $this->currency->iso,
            'locale' => $this->currency->locale,
            'notes' => $this->notes,
            'currency' => $this->currency,
        ];
    }
}
