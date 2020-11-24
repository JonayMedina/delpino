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
        'bank_name', 'account_holder', 'account_code',  'account_email', 'account_dni', 'account_phone','description', 'active', 'address', 'system', 'country_id'
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
