@component('mail::message')
Se ha solicitado Recuperación de Acceso,
Para Completar, copie el codigo y peguelo en la pagina de comprobación:

<table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td align="center">
<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td align="center">
<table border="0" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h1 class="card-title" style="fozt-size: 75px;">{{ $user->token }}</h1>
        </div>
    </div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>

Si no ha realiado esta solicitud, por favor haga caso omiso ha este correo.

Gracias,<br>
{{ config('app.name') }}
@endcomponent
