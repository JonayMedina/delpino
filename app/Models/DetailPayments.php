<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DetailPayments extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'payment_id', 'amount', 'amount_iso', 'operation_method', 'receiver_id', 'recipient_acount', 'recipient_bank_name', 'recipient_name', 'recipient_dni', 'recipient_phone', 'description', 'active'
    ];

    protected $cast = [
        'payed_at' => 'datetime:H:i:s d/m/Y',
        'created_at' => 'datetime:H:i:s d/m/Y',
        'updated_at' => 'datetime:H:i:s d/m/Y',
        'deleted_at' => 'datetime:H:i:s d/m/Y',
    ];

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'payment_id', 'id');
    }

    public function receiver()
    {
        return $this->belongsTo(Receiver::class, 'receiver_id', 'id');
    }
}
