<?php

namespace App\Http\Controllers;

use App\Models\Recipient;
use Traits\HelpersTrait;
use Illuminate\Http\Request;

class RecipientController extends Controller
{
    use HelpersTrait;

    public function index()
    {
        $recipient = Recipient::orderBy('id', 'desc')->get();
        return response()->json(['recipient'=>$recipient]);
    }

    public function indexActive()
    {
        $recipient = Recipient::orderBy('id', 'desc')->active()->get();
        return response()->json(['recipient'=>$recipient]);
    }

    public function store(Request $request)
    {
        $recipient = new Recipient([
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
        $recipient->save();

        return response()->json(['message' =>'Cuenta de '.$recipient->account_name.' Guardada']);
    }

    public function update(Request $request, Recipient $recipient)
    {
      try {
        DB::beginTransaction();
        $recipient->update([
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
          return response()->json(['message' =>'Cuenta de '.$recipient->account_name.' actualizada.']);
      } catch (Exception $e) {
          DB::rollBack();
          return response()->json(['error'=>$e], 400);
      }
    }

    public function desactive(Recipient $recipient)
    {
        $recipient->active = 0;
        $recipient->save();

        return response()->json(['message'=>$recipient->name.' Desactivado']);
    }

    public function activate(Recipient $recipient)
    {
        $recipient->active = 1;
        $recipient->save();

        return response()->json(['message' =>$recipient->name.' Activado']);
    }

    public function destroy(Recipient $recipient)
    {
        $recipient->delete();

        return response()->json(['message'=>'Cuenta Eliminada']);
    }

}
