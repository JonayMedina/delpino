<?php

namespace App\Http\Controllers;

use DB;
use PDF;
use App\Models\Bank;
use Illuminate\Http\Request;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $banks = Bank::orderBy('id', 'desc')->get();
        return response()->json(['banks'=>$banks]);
    }

    public function indexActive()
    {
        $banks = Bank::orderBy('id', 'desc')->active()->get();
        return response()->json(['banks'=>$banks]);
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $bank = new Bank([
                'bank_name' => strtoupper($this->deleteAccent($request->bank_name)),
                'account_code' => strtoupper($this->deleteAccent($request->account_code)),
                'account_holder' => strtoupper($this->deleteAccent($request->account_holder)),
                'account_email' => $request->account_email,
                'account_dni' => $request->account_dni,
                'account_phone' => $request->account_phone,
                'address' => $request->address,
                'description' => $request->description,
                'country_id' => $request->country_id,
                'system' => $request->system,
                'active' => 1,
            ]);
            $bank->save();
            DB::commit();
            return response()->json(['message' =>'Cuenta '. $bank->name.' Guardada']);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['error'=>$e], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sale  $bank
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bank = Bank::find($id);
        return response()->json($bank);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sale  $bank
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $bank = Bank::find($id);
        return response()->json($bank);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sale  $bank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Bank $bank)
    {
      try {
        DB::beginTransaction();
        $bank->update([
          'name' => strtoupper($this->deleteAccent($request->name)),
          'account_code' => strtoupper($this->deleteAccent($request->account_code)),
          'account_holder' => strtoupper($this->deleteAccent($request->account_holder)),
          'description' => $request->description,
          'email' => $request->email,
          'dni_holder' => $request->dni_holder,
          'phone_holder' => $request->phone_holder,
          'address' => $request->address,
          'office_num' => $request->office_num,
          'bci' => $request->bci,
        ]);
        DB::commit();
          return response()->json(['message' =>'actualizado']);
      } catch (Exception $e) {
          DB::rollBack();
          return response()->json(['error'=>$e], 400);
      }
    }

    public function desactive(Bank $bank)
    {
        $bank->active = 0;
        $bank->save();

        return response()->json(['message' => $bank->name.' desactivado']);
    }

    public function activate(Bank $bank)
    {
        $bank->active = 1;
        $bank->save();

        return response()->json(['message' => $bank->name.' activado']);
    }

    public function destroy(Bank $bank)
    {
        $bank->delete();

        return response()->json(['message'=>'Cuenta Eliminada']);
    }

    public function deleteAccent($string){

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
