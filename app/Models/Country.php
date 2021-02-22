<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['iso', 'name', 'nicename', 'iso3', 'num_country', 'phone_code'];

    public function currencies()
    {
        return $this->hasMany(Currency::class);
    }

    // scopes

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
    public function scopeByName($query)
    {
        return $query->orderBy('name', 'ASC');
    }
}
