<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            // CountrySeeder::class,
            // CurrencySeeder::class,
            // CustomerSeeder::class,
            // BankSeeder::class,
            UserSeeder::class
        ]);
    }
}
