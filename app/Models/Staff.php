<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'second_name', 'surname', 'second_surname',
        'email', 'birthday', 'phone', 'avatar', 'dpi', 'active'
    ];

    protected $guard_name = 'api';

    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' => 'datetime',
    ];

    //Relations

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    //Scopes

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
}
