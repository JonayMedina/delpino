<?php

namespace App\Http\Controllers;

use DB;
use Carbon\Carbon;
use App\Models\Currency;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CurrencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $currencies = Currency::with('country:id,nicename,iso')->get();
        return response()->json(['currencies' => $currencies]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'iso' => 'required|string',
            'symbol' => 'required|string',
            'country_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 422);
        }

        $currency = new Currency([
            'name' => $request->name,
            'iso' => $request->iso,
            'symbol' => $request->symbol,
            'country_id' => $request->country_id
        ]);

        $currency->save();

        return response()->json(['message' => 'Moneda guardada']);
    }

    public function show(Currency $currency)
    {
        //
    }

    public function edit(Currency $currency)
    {
        //
    }

    public function update(Request $request, Currency $currency)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'iso' => 'required|string',
            'symbol' => 'required|string',
            'country_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 422);
        }

        $currency->update([
            'name' => $request->name,
            'iso' => $request->iso,
            'symbol' => $request->symbol,
            'country_id' => $request->country_id
        ]);

        $currency->save();

        return response()->json(['message' => 'Moneda actualizada']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Currency  $currency
     * @return \Illuminate\Http\Response
     */
    public function destroy(Currency $currency)
    {
        $currency->delete();
        return response()->json(['message' => 'Deleted'], 204);
    }

    public function activate(Currency $currency)
    {
        $currencyActive = Currency::where('iso', $currency->iso)->where('active', 1)->first();

        $currency->update(['active' => 1]);
        if ($currencyActive) {
            $currencyActive->update(['active' => 0]);
        }

        return response()->json(['message' => 'Exito! Cambiado'], 200);
    }

    public function desactivate(Currency $currency)
    {
        $currency->update(['active' => 0]);
        return response()->json(['message' => 'Exito! Moneda no se encuentra Activa'], 200);
    }
}
