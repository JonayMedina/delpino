<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\AdminRegisterUserRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ResetChangePasswordRequest;
use App\Http\Requests\UserCustomerOwnDataRequest;
use App\Http\Requests\UserCustomerRequest;
use App\Http\Resources\UserCustomerProfile;
use App\Models\User;
use App\Http\Traits\PasswordResetTrait as TraitsPasswordResetTrait;
use App\Http\Traits\UsersTrait;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    use UsersTrait, TraitsPasswordResetTrait;

    public function __construct()
    {
        // $this->middleware('isAdmin', ['only' => ['register', 'update', 'delete']]);
    }

    public function getAllUsers()
    {
        $users = User::all();

        return response()->json(['users' => $users]);
    }

    public function storeUser(AdminRegisterUserRequest $request)
    {
        $resp = $this->registerUserAdmin($request);
        // dd($resp);
        if (in_array('error', $resp)) {
            return response()->json(['error' => $resp['error']], 400);
        }

        $data = UserCustomerProfile::make($resp['user']);
        return response()->json([
            'message' => 'Usuario Registrado Satisfactoriamente',
            'user' => $data
        ], 201);
    }

    public function storeCustomer(UserCustomerRequest $request)
    {
        $resp = $this->registerCustomer($request);
        // dd($resp);
        if (in_array('error', $resp)) {
            return response()->json(['error' => $resp['error']], 400);
        }

        $data = UserCustomerProfile::make(User::find($resp['user']['id']));
        return response()->json([
            'message' => 'Registrado Satisfactoriamente',
            'user' => $data
        ], 201);
    }

    public function show($id)
    {
        $user = UserCustomerProfile::make(User::find($id));

        return response()->json(['user' => $user]);
    }

    public function update(AdminRegisterUserRequest $request, User $user)
    {
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json([
            'message' => 'Datos de Usuario Actualizados',
            'user' => $user
        ], 201);
    }

    public function updateOwnData(UserCustomerOwnDataRequest $request)
    {
        $auth = Auth::user();
        if ($auth->email != $request->email) {
            $auth->email = $request->email;
        }

        $auth->name = $request->name;
        $auth->save();

        $customer = $auth->customer;
        if ($customer) {
            $customer->name = ucwords($request->name);
            $customer->email = $auth->email;
            $customer->phone = $request->phone;
            $customer->dni = $request->dni;
            $customer->birthdate = $request->birthdate;
            $customer->save();
        }


        return response()->json([
            'message' => 'Datos Actualizados',
            'customer' => $auth->customer
        ], 201);
    }

    public function checkAuth(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'incorrecto', 400]);
        }

        $auth = auth('api')->user();
        if (!Hash::check($request->password, $auth->password)) {
            return response()->json(['error' => 'Actual Contraseña erronea!!'], 401);
        }

        return response()->json(['message' => true], 200);
    }

    public function profileUpdatePassword(ChangePasswordRequest $request)
    {
        $auth = auth('api')->user();
        $user = User::find($auth->id);
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'message' => 'Contraseña Actualizada'
        ], 200);
    }

    public function updatePassword(ResetChangePasswordRequest $request)
    {
        $check = $this->findToken($request->email, $request->code);

        if (!$check) {
            return response()->json(['error' => 'No encontramos este Token o ha Expirado!!', 'check' => $check], 404);
        }

        $user = User::where('email', $request->email)->update([
            'password' => bcrypt($request->password),
        ]);
        $this->deleteToken($request->code);

        return response()->json([
            'message' => 'Accesos actualizados'
        ], 201);
    }

    public function getAvatar(User $user)
    {
        $avatar = ($user->avatar) ? Storage::url($user->avatar) : '';
        if ($avatar) {
            $avatar = url('/') . $avatar;
        }

        return response()->json(['avatar' => $avatar], 200);
    }

    public function updateAvatar(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'avatar' => 'mimes:jpeg,jpg,png,gif|required|max:10000'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), 400]);
        }

        $image = $request->file('avatar');
        if ($user->avatar) {
            $delete[] = Storage::disk('public')->delete($user->avatar);
        }
        $user->avatar = $this->saveAvatar($image, 'users/', $user->id);

        $user->save();
        $avatar = Storage::url($user->avatar);
        return response()->json(
            [
                'message' => 'Imagen Guardada',
                'avatar' => url('/') . $avatar
            ],
            201
        );
    }

    public function deleteUser(User $user)
    {
        $admin = auth('api')->user();
        if ($admin->role != 1) {
            return response()->json(['error' => ' No Autorizado'], 401);
        }
        if ($admin->id == $user->id) {
            return response()->json(['error' => ' No Autorizado'], 401);
        }

        $user->delete();
        return response()->json(['message' => 'Usuario Eliminado']);
    }

    public function emailV($email)
    {
        $e = User::where('email', $email)->first();
        return response()->json(['email' => ($e) ? true : false]);
    }
}
