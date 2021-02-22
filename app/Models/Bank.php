<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'bank_name', 'account_holder', 'account_code',  'account_email', 'account_dni', 'account_phone', 'description', 'active', 'address', 'system', 'country_id', 'currency_id'
    ];

    public function payment()
    {
        return $this->hasMany(Payment::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    protected $casts = [
        'created_at' => 'datetime:H:i:s d/m/Y ', // Change format
        'updated_at' => 'datetime:H:i:s d/m/Y',
    ];
}
