<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\DB;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Image;
use App\Http\Traits\HelpersTrait;
use App\Models\Customer;

trait UsersTrait
{
    use HelpersTrait;

    public function registerUserAdmin($data)
    {
        try {
            // dd($data->hours['monday']);
            $user = User::create([
                'email' => $data->email,
                'name' => ($data->name) ? $data->name : '',
                'phone' => ($data->phone) ? $data->phone : null,
                'password' => bcrypt($data->password),
                'role' => 1,
                'active' => 1
            ]);

            if ($data->hasFile('avatar')) {

                if ($data->file('avatar')->isValid()) {
                    $user->avatar = $this->saveAvatar($data->file('avatar'), 'users/', $user->id);
                    $user->save();
                }
            }

            DB::commit();
            return ['user' => $user];
        } catch (Exception $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }

    public function registerCustomer($data)
    {
        try {
            // dd($data->hours['monday']);
            $user = User::create([
                'name' => ucwords($data->name),
                'email' => $data->email,
                'password' => bcrypt($data->password),
                'role' => 4,
                'active' => 1
            ]);

            $customer = Customer::updateOrCreate(
                [
                    'email' => $data->email,
                ],
                [
                    'name' => ucwords($data->name),
                    'phone' => $data->phone,
                    'dpi' => $data->dpi,
                    'birthdate' => $data->birthdate,
                    'active' => 1,
                    'user_id' => $user->id
                ]
            );

            $user->customer_id = $customer->id;
            $user->save();

            if ($data->hasFile('avatar')) {

                if ($data->file('avatar')->isValid()) {
                    $user->avatar = $this->saveAvatar($data->file('avatar'), 'users/', $user->id);
                    $user->save();

                    $customer->avatar = $this->saveAvatar($data->file('avatar'), 'customers/', $customer->id);
                    $customer->save();
                }
            }

            DB::commit();
            return ['user' => $user];
        } catch (Exception $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }
}
