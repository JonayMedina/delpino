<?php

namespace App\Http\Controllers;

use App\Http\Traits\PasswordResetTrait as TraitsPasswordResetTrait;
use Illuminate\Support\Facades\Validator;
use App\Mail\PasswordResetCreate as MailReset;
use App\Models\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;
use Mail;

class PasswordResetController extends Controller
{
    use TraitsPasswordResetTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()],  422);
        }

        $user = User::where('email', $request->email)->with('customer')->first();
        if (!$user) {
            return response()->json(
                [
                    'error' => 'No encontramos este email: ' . $request->email . ' en nuestros registros!.'
                ],
                404
            );
        }

        $passwordReset = PasswordReset::updateOrCreate(
            ['email' => $user->email],
            ['token' => rand(1000, 9999)]
        );

        if ($user && $passwordReset) {
            $user->token = $passwordReset->token;
            Mail::to($request->email)->send(new MailReset($user));
        }

        return response()->json([
            'message' => 'Hemos enviado un Link para reestablecer su Contraseña!.'
        ], 200);
    }

    public function checkToken($email, $token)
    {
        $response = $this->findToken($email, $token);

        if (!$response) {
            return response()->json(
                [
                    'error' => 'No encontramos este Token o ha expirado!!'
                ],
                404
            );
        }

        return response()->json(
            [
                'message' => 'Token valido',
                'email' => $email,
                'token' => $token
            ],
            200
        );
    }
}
