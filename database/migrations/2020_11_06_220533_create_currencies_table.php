<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('name',30);
            $table->string('iso',8);
            $table->string('symbol',8);
            $table->boolean('active')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });

        DB::table('currencies')->insert(
            [
                [
                    'name' => 'Euro',
                    'iso' => 'EUR',
                    'symbol' => '€',
                    'active' => 1
                ],
                [
                    'name' => 'Peso Colombiano',
                    'iso' => 'COP',
                    'symbol' => '$',
                    'active' => 1
                ],
                [
                    'name' => 'Dolar Ecuador',
                    'iso' => 'USD',
                    'symbol' => '$',
                    'active' => 1
                ],
                [
                    'name' => 'Sol Peru',
                    'iso' => 'PEN',
                    'symbol' => 'S/',
                    'active' => 1
                ],
                [
                    'name' => 'Peso Chile',
                    'iso' => 'CLP',
                    'symbol' => '$',
                    'active' => 1
                ],
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('currencies');
    }
}
