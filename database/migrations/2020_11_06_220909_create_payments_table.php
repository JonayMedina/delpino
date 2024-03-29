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
            $table->decimal('pay', 10, 2);
            $table->string('pay_iso', 10)->nullable();
            $table->integer('operation_code')->nullable();
            $table->text('file')->nullable();
            $table->enum('operation_method', ['transf', 'deposit'])->nullable();
            $table->foreignId('bank_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('agent_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('customer_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('currency_id')->nullable()->constrained()->onDelete('set null');
            $table->decimal('price_rate', 20, 2)->nullable();
            $table->string('price_rate_formated')->nullable();
            $table->boolean('active')->default(0);
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
        Schema::dropIfExists('payments');
    }
}
