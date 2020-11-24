<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banks', function (Blueprint $table) {
            $table->id();
            $table->string('bank_name', 100);
            $table->string('account_holder');
            $table->string('account_code');
            $table->string('account_email',100)->nullable();
            $table->string('account_dni',20)->nullable();
            $table->string('account_phone', 20)->nullable();
            $table->text('address')->nullable();
            $table->string('description')->nullable();
            $table->foreignId('country_id')->nullable()->constrained()->onDelete('set null');
            $table->boolean('system')->default(0);
            $table->boolean('active')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banks');
    }
}
