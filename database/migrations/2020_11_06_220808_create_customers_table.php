<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('dni')->unique();
            $table->string('type_dni', 10)->nullable();
            $table->string('notes')->nullable();
            $table->string('email', 50)->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('country', 20)->nullable();
            $table->text('address')->nullable();
            $table->string('id_f', 150)->nullable()->comment('url dni_front');
            $table->string('id_b', 150)->nullable()->comment('url dni_back');
            $table->date('birthdate', 20)->nullable();
            $table->string('term_selfie', 150)->nullable()->comment('url photo term selfie with dni');
            $table->string('auth_image', 150)->nullable()->comment('url photo document to accept the terms.');
            $table->boolean('approved')->default(0)->nullable()->comment('approved "3", Revition:2, waiting aprovation:1, missing docs:0');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('agent_id')->nullable()->constrained()->onDelete('set null');
            $table->boolean('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
