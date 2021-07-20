<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $countries = Country::orderBy('id', 'asc')->get();
        return response()->json(['countries' => $countries]);
    }

    public function indexActive()
    {
        $countries = Country::orderBy('id', 'desc')->active()->get();
        return response()->json(['countries' => $countries]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $country = new Country([
            'name' => strtoupper($request->name),
            'iso' => strtoupper($request->iso),
            'currency' => strtoupper($request->currency),
            'symbol' => strtoupper($request->symbol),
            'active' => 0
        ]);
        $country->save();

        return response()->json(['message' => $country->name . ' Guardado']);
    }

    public function show(Country $country)
    {
        //
    }

    public function edit(Country $country)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Country $country)
    {
        $country->name = strtoupper($request->name);
        $country->iso = strtoupper($request->iso);
        $country->symbol = strtoupper($request->symbol);
        $country->currency = strtoupper($request->currency);

        $country->save();

        return response()->json(['message' => $country->name . ' Actualizado']);
    }

    public function desactive(Country $country)
    {
        $country->active = 0;
        $country->save();

        return response()->json(['message' => $country->name . ' Desactivado']);
    }

    public function activate(Country $country)
    {
        $country->active = 1;
        $country->save();

        return response()->json(['message' => $country->name . ' activado']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function destroy(Country $country)
    {
        $country->delete();

        return response()->json(['message' => 'Pais Eliminado']);
    }
}
