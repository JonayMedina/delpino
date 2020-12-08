<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'dni', 'type_dni','email','phone', 'country','address', 'id_f','id_b','birthdate','accum','type_id','term_selfie', 'auth_image', 'approved', 'user_id', 'agent_id', 'active'
    ];

    public function receiver()
    {
        return $this->hasMany(Receiver::class);
    }

    public function sale()
    {
        return $this->hasMany(Sale::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
