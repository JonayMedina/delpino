<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class UserCustomerProfile extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'active' => $this->active,
            'role' => $this->role,
            'customer_id' => $this->customer_id,
            'name' => ($this->customer->name) ? ucfirst($this->customer->name) : '',
            'email' => ($this->customer->email) ? $this->customer->email : '',
            'phone' => ($this->customer->phone) ? $this->customer->phone : '',
            'birthdate' => ($this->customer->birthdate) ? $this->customer->birthdate : '',
            'dni' => ($this->customer->dni) ? $this->customer->dni : '',
            'age' => ($this->customer->birthdate) ? Carbon::parse($this->customer->birthdate)->diff(Carbon::now())->format('%y') : '',
            'created_at' => ($this->created_at) ? $this->created_at->format('H:i:s d/m/Y') : null,
            'updated_at' => ($this->updated_at) ? $this->updated_at->format('H:i:s d/m/Y') : null,
        ];
    }
}
