<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['amount', 'notes',  'active', 'currency_id', 'country_id'];

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }

    protected $casts = [
	    'created_at' => 'datetime:H:i:s d/m/Y ', // Change format
	    'updated_at' => 'datetime:H:i:s d/m/Y',
	];
}
