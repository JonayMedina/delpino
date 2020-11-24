<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = ['iso', 'name'];

    public function scopeActive($query)
    {
        return $query->where('active',1);
    }
    public function scopeByName($query)
    {
        return $query->orderBy('name','ASC');
    }
}
