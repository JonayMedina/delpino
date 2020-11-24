<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipient extends Model
{
    use HasFactory;

    protected $fillable = [
        'bank_name', 'dni','account_name', 'account_code',  'email',  'account_phone', 'address', 'country_id', 'customer_id', 'description', 'active'
    ];

    public function sale()
    {
        return $this->hasMany(Sale::class);
    }

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
}
