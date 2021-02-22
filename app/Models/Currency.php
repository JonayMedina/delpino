<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name', 'iso', 'symbol', 'country_id', 'active',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public function bank()
    {
        return $this->hasMany(Bank::class, 'currency_id', 'id');
    }

    // scopes

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
}
