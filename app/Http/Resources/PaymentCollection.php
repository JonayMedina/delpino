<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PaymentCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // dd($this->resource->lastPage());
        return [
            'data' => $this->collection,
            'current_page' => $this->resource->currentPage(),
            'last_page' => $this->resource->LastPage()
        ];
    }
}
