<?php

namespace App\Http\Controllers;

use App\Http\Requests\BankRequest;
use PDF;
use App\Models\Bank;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $banks = Bank::orderBy('id', 'desc')->with('currency:id,name,iso,symbol')->get();
        return response()->json(['banks' => $banks]);
    }

    public function byCurrency($id)
    {
        $banks = Bank::select('id', 'bank_name', 'account_code', 'account_dni')->where('currency_id', $id)->active()->get();

        return response()->json(['banks' => $banks]);
    }

    public function indexActive()
    {
        $banks = Bank::orderBy('id', 'desc')->active()->get();
        return response()->json(['banks' => $banks]);
    }

    public function store(BankRequest $request)
    {

        DB::beginTransaction();
        try {
            $bank = new Bank([
                'bank_name' => strtoupper($this->deleteAccent($request->bank_name)),
                'account_code' => strtoupper($this->deleteAccent($request->account_code)),
                'account_holder' => strtoupper($this->deleteAccent($request->account_holder)),
                'currency_id' => $request->currency_id,
                'active' => 1,
                'system' => 1
            ]);
            $bank->save();
            DB::commit();
            return response()->json(['message' => 'Cuenta ' . $bank->name . ' Guardada']);
        } catch (Throwable $e) {
            DB::rollBack();
            return response()->json(['errors' => $e], 400);
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
    public function update(BankRequest $request, Bank $bank)
    {
        try {
            DB::beginTransaction();
            $bank->update([
                'bank_name' => strtoupper($this->deleteAccent($request->bank_name)),
                'account_code' => $request->account_code,
                'account_email' => $request->email,
                'account_phone' => $request->phone,
                'account_holder' => strtoupper($this->deleteAccent($request->account_holder)),
                'description' => $request->description,
                'currency_id' => $request->currency_id,
            ]);
            DB::commit();
            return response()->json(['message' => 'Actualizado']);
        } catch (Throwable $e) {
            DB::rollBack();
            return response()->json(['error' => $e], 400);
        }
    }

    public function desactive(Bank $bank)
    {
        $bank->active = 0;
        $bank->save();

        return response()->json(['message' => $bank->name . ' desactivado']);
    }

    public function activate(Bank $bank)
    {
        $bank->active = 1;
        $bank->save();

        return response()->json(['message' => $bank->name . ' activado']);
    }

    public function destroy(Bank $bank)
    {
        $bank->delete();

        return response()->json(['message' => 'Cuenta Eliminada']);
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
            $string
        );

        //Reemplazamos la I y i
        $string = str_replace(
            array('Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î'),
            array('I', 'I', 'I', 'I', 'i', 'i', 'i', 'i'),
            $string
        );

        //Reemplazamos la O y o
        $string = str_replace(
            array('Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'),
            array('O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'),
            $string
        );

        //Reemplazamos la U y u
        $string = str_replace(
            array('Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'),
            array('U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'),
            $string
        );

        //Reemplazamos la N, n, C y c
        $string = str_replace(
            array('Ç', 'ç'),
            array('C', 'c'),
            $string
        );

        return $string;
    }
}
