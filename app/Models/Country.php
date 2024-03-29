<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['name', 'currency', 'iso', 'symbol', 'active'];

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
