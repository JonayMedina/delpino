<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    use HasFactory;

    protected $primaryKey = 'email';
    const UPDATED_AT = null;

    protected $fillable = [
        'email', 'token'
    ];

    public function setUpdatedAt($value)
    {;
    }
}
