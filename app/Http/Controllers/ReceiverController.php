<?php

namespace App\Http\Controllers;

use App\Models\Receiver;
use Traits\HelpersTrait;
use Illuminate\Http\Request;

class ReceiverController extends Controller
{
    use HelpersTrait;

    public function index()
    {
        $receivers = Receiver::orderBy('id', 'desc')->get();
        return response()->json(['receivers'=>$receivers]);
    }

    public function indexActive()
    {
        $receivers = Receiver::orderBy('id', 'desc')->active()->get();
        return response()->json(['receivers'=>$receivers]);
    }

    public function store(Request $request)
    {
        $receiver = new Receiver([
            'bank_name' => strtoupper($this->deleteAccent($request->bank_name)),
            'dni' => $request->dni,
            'account_name' => strtoupper($this->deleteAccent($request->account_name)),
            'account_code' => strtoupper($this->deleteAccent($request->account_code)),
            'email' => $request->email,
            'account_phone' => $request->account_phone,
            'address' => $request->address,
            'country_id' => $request->country_id,
            'customer_id' => $request->customer_id,
            'description' => $request->description,
            'active' => 1,
        ]);
        $receiver->save();

        return response()->json(['message' =>'Cuenta de '.$receiver->account_name.' Guardada']);
    }

    public function update(Request $request, Receiver $receiver)
    {
      try {
        DB::beginTransaction();
        $receiver->update([
            'bank_name' => strtoupper($this->deleteAccent($request->bank_name)),
            'dni' => $request->dni,
            'account_name' => strtoupper($this->deleteAccent($request->account_name)),
            'account_code' => strtoupper($this->deleteAccent($request->account_code)),
            'email' => $request->email,
            'account_phone' => $request->account_phone,
            'address' => $request->address,
            'country_id' => $request->country_id,
            'customer_id' => $request->customer_id,
            'description' => $request->description,
        ]);
        DB::commit();
          return response()->json(['message' =>'Cuenta de '.$receiver->account_name.' actualizada.']);
      } catch (Exception $e) {
          DB::rollBack();
          return response()->json(['error'=>$e], 400);
      }
    }

    public function desactive(Receiver $receiver)
    {
        $receiver->active = 0;
        $receiver->save();

        return response()->json(['message'=>$receiver->name.' Desactivado']);
    }

    public function activate(Receiver $receiver)
    {
        $receiver->active = 1;
        $receiver->save();

        return response()->json(['message' =>$receiver->name.' Activado']);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sale  $receiver
     * @return \Illuminate\Http\Response
     */
    public function destroy(Receiver $receiver)
    {
        $receiver->delete();

        return response()->json(['message'=>'Cuenta Eliminada']);
    }

    public function deleteAccent($string)
    {
      //Reemplazamos la A y a
      $string = str_replace(
      array('Á', 'À', 'Â', 'Ä', 'á', 'à', 'ä', 'â', 'ª'),
      array('A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a'),
      $string
      );

      //Reemplazamos la E y e
      $string = str_replace(
      array('É', 'È', 'Ê', 'Ë', 'é', 'è', 'ë', 'ê'),
      array('E', 'E', 'E', 'E', 'e', 'e', 'e', 'e'),
      $string );

      //Reemplazamos la I y i
      $string = str_replace(
      array('Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î'),
      array('I', 'I', 'I', 'I', 'i', 'i', 'i', 'i'),
      $string );

      //Reemplazamos la O y o
      $string = str_replace(
      array('Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'),
      array('O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'),
      $string );

      //Reemplazamos la U y u
      $string = str_replace(
      array('Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'),
      array('U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'),
      $string );

      //Reemplazamos la N, n, C y c
      $string = str_replace(
      array('Ç', 'ç'),
      array('C', 'c'),
      $string
      );

      return $string;
    }
}
