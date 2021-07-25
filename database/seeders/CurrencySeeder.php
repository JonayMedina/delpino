<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\Currency;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $curr = [
            [
                'name' => 'Euro',
                'iso' => 'EUR',
                'symbol' => '€',
                'locale' => 'es-Es',
                'active' => 1
            ],
            [
                'name' => 'Peso Colombiano',
                'iso' => 'COP',
                'symbol' => '$',
                'locale' => 'es-CO',
                'active' => 1
            ],
            [
                'name' => 'Dolar Ecuador',
                'iso' => 'USD',
                'symbol' => '$',
                'locale' => 'es-EC',
                'active' => 1
            ],
            [
                'name' => 'Sol Peru',
                'iso' => 'PEN',
                'symbol' => 'S/',
                'locale' => 'es-PE',
                'active' => 1
            ],
            [
                'name' => 'Peso Chile',
                'iso' => 'CLP',
                'symbol' => '$',
                'locale' => 'es-CL',
                'active' => 1
            ],
        ];

        foreach ($curr as $key => $value) {
            $country = Country::where('iso', $value['iso'])->first();

            Currency::create([
                'name' => $value['name'],
                'iso' => $value['iso'],
                'symbol' => $value['symbol'],
                'locale' => $value['locale'],
                'active' => $value['active'],
                'country_id' => $country->id
            ]);
        }
    }
}
