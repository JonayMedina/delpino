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
        $currencies = Currency::with('country:id,name,iso')->get();
        return response()->json(['currencies' => $currencies]);
    }

    public function actives()
    {
        $currencies = Currency::active()->get();
        return response()->json(['currencies' => $currencies]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:currencies,name,',
            'iso' => 'required|string',
            'symbol' => 'required|string',
            'locale' => 'required|string',
            'country_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 422);
        }

        $currency = new Currency([
            'name' => $request->name,
            'iso' => $request->iso,
            'symbol' => $request->symbol,
            'locale' => $request->locale,
            'country_id' => $request->country_id,
            'active' => 0
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
            'name' => 'required|string|unique:currencies,name,' . $currency->id,
            'iso' => 'required|string',
            'symbol' => 'required|string',
            'locale' => 'required|string',
            'country_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 422);
        }

        $currency->name = $request->name;
        $currency->iso = $request->iso;
        $currency->symbol = $request->symbol;
        $currency->locale = $request->locale;
        $currency->country_id = $request->country_id;
        $currency->save();

        return response()->json(['message' => 'Moneda actualizada', 'currency' => $currency]);
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
