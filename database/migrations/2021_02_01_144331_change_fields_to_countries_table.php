<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeFieldsToCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('countries', function (Blueprint $table) {
        $table->string('name', 80)->nullable()->change();
        $table->string('iso', 2)->nullable()->change();
        $table->string('nicename', 80)->nullable();
        $table->string('iso3', 3)->nullable();
        $table->integer('num_country')->nullable();
        $table->integer('phone_code')->nullable();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('countries', function (Blueprint $table) {
        $table->dropColumn(['iso3', 'num_country', 'phone_code', 'nicename']);
      });
    }
}
