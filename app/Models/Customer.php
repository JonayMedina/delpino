<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name', 'dni', 'type_dni','email','phone', 'country','address', 'id_f','id_b','birthdate','accum','type_id','term_selfie', 'auth_image', 'approved', 'user_id', 'agent_id', 'active'
    ];

    public function recipient()
    {
        return $this->hasMany(Recipient::class);
    }

    public function payment()
    {
        return $this->hasMany(Payment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    protected $casts = [
        'created_at' => 'datetime:H:i:s d/m/Y', // Change format
        'updated_at' => 'datetime:H:i:s d/m/Y',
        'deleted_at' => 'datetime:H:i:s d/m/Y',
	  ];

}
