<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'pay', 'pay_iso', 'operation_code', 'operation_method', 'user_id', 'receiver_id', 'file', 'customer_id', 'bank_id', 'description', 'active', 'currency_id', 'price_rate', 'price_rate_formated'
    ];

    // Relations

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'id');
    }

    public function bank()
    {
        return $this->belongsTo(Bank::class, 'bank_id', 'id');
    }

    public function detailPayments()
    {
        return $this->hasMany(DetailPayments::class, 'payment_id', 'id');
    }

    // Scopes

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
}
