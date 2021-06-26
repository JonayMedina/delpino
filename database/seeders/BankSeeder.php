<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class BankSeeder extends Seeder
{

    public function run()
    {
        $faker = Faker::create();
        $currencies = Currency::all();
        for ($j = 0; $j < count($currencies); $j++) {
            for ($i = 1; $i < 2; $i++) {
                DB::table('banks')->insert([
                    'bank_name' => $faker->company,
                    'account_holder' => $faker->name,
                    'account_code' => $faker->bankAccountNumber,
                    'account_email' => $faker->unique()->email,
                    'account_dni' => $faker->randomNumber(9),
                    'account_phone' => $faker->randomNumber(9),
                    'address' => $faker->address,
                    'description' => $faker->text(50),
                    'active' => 1,
                    'currency_id' => $currencies[$j]['id'],
                    'system' => $faker->randomElement([0, 1]),
                    'created_at' => '2020-10-' . $faker->numberBetween(1, 5) . ' 20:20:20',
                    'updated_at' => '2020-10-' . $faker->numberBetween(1, 5) . ' 20:20:20',
                ]);
            }
        }
    }
}
