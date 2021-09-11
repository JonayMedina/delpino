<?php

namespace App\Http\Traits;

use App\Models\PasswordReset;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Image;

trait PasswordResetTrait
{
    public function findToken($email, $token)
    {
        $check = PasswordReset::where('token', $token)->where('email', $email)->first();

        return $check;
    }

    public function deleteToken($token)
    {
        PasswordReset::where('token', $token)->delete();

        return 200;
    }
}
