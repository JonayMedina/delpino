<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->decimal('amount',15,2)->nullable();
            $table->string('amount_iso', 10)->nullable();
            $table->decimal('pay', 10,8);
            $table->string('pay_iso', 10)->nullable();
            $table->integer('operation_code')->nullable();
            $table->text('file')->nullable();
            $table->enum('operation_method',['transf','deposit']);
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('recipient_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('customer_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('bank_id')->nullable()->constrained()->onDelete('set null');
            $table->string('description', 50)->nullable();
            $table->boolean('active')->default(0);
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
        Schema::dropIfExists('payments');
    }
}
