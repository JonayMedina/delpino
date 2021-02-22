<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail_payments', function (Blueprint $table) {
            $table->id();
            $table->timestamp('payed_at');
            $table->decimal('amount',15,2)->nullable();
            $table->string('amount_iso', 10)->nullable();
            $table->string('recipient_acount')->nullable();
            $table->string('recipient_bank_name')->nullable();
            $table->string('recipient_name')->nullable();
            $table->string('recipient_dni')->nullable();
            $table->string('recipient_phone')->nullable();
            $table->foreignId('recipient_id')->nullable()->constrained()->onDelete('set null');
            $table->string('description', 50)->nullable();
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
        Schema::dropIfExists('detail_payments');
    }
}
