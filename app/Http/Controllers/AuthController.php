<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCustomerProfile;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth('api')->setTTL(1440)->attempt($credentials)) {
            return response()->json(['error' => 'Las Credenciales no coinciden'], 400);
        }

        return $this->respondWithToken($token);
    }

    public function me()
    {
        $user = $this->guardAuth();
        return response()->json(['user' => $user]);
    }

    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => $this->guardAuth(),
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }

    protected function guardAuth()
    {
        $auth = Auth::guard('api')->user();


        if ($auth->role == 4) {
            $user = UserCustomerProfile::make($auth);
        } else {
            $user = $auth;
        }
        return $user;
    }
}
