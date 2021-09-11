<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordResetCreate extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $user;
    public $url;

    public function __construct($user)
    {
        $this->user = $user;
        $this->token = $user->token;
        $this->url = "https://venexpressdelpino.com/auth/restart-password/?email=" . $user->email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.passwordResetCreate')
            ->subject('Recuperacion de Acceso a Venexpressdelpino.com');
    }
}
