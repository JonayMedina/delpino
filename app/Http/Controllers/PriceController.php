<?php

namespace App\Http\Controllers;

use App\Http\Requests\PriceRequest;
use App\Http\Resources\PriceResource;
use Auth;
use App\Models\Currency;
use App\Models\Price;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class PriceController extends Controller
{
    public function index()
    {
        $prices = PriceResource::collection(Price::with('currency:id,iso,name,symbol,locale')->get());
        return response()->json(['prices' => $prices]);
    }

    public function store(PriceRequest $request)
    {
        $price = new Price([
            'amount' => $request->amount,
            'amount_formated' => $request->amount_formated,
            'notes' => $request->notes,
            'currency_id' => $request->currency_id,
            'country_id' => $request->country_id,
        ]);

        $price->save();

        return response()->json(['message' => 'Saved'], 200);
    }

    public function show($id)
    {
        $price = Price::findOrFail($id);
        return response()->json(['price' => $price]);
    }

    public function update(PriceRequest $request, Price $price)
    {
        $price->amount = $request->amount;
        $price->amount_formated = $request->amount_formated;
        $price->notes = $request->notes;
        $price->currency_id = $request->currency_id;
        $price->country_id = $request->country_id;
        $price->save();

        return response()->json(['message' => 'updated'], 200);
    }

    public function desactive(Price $price)
    {
        $price->active = 0;
        $price->save();

        return response()->json(['message' => $price->notes . ' desactivado']);
    }

    public function activate(Price $price)
    {
        $price->active = 1;
        $price->save();

        return response()->json(['message' => $price->notes . ' activado']);
    }

    public function destroy(Price $price)
    {
        $price->delete();

        return response()->json(['message' => 'Precio Eliminado']);
    }

    public function getPrice()
    {
        $prices = Price::with('currency:id,iso,symbol')->get();
        $pr = [];
        $discount = 0;
        $user = Auth::user();

        for ($i = 0; $i < count($prices); $i++) {
            $pr[$i]['amount'] = $prices[$i]->amount;
            $pr[$i]['id'] = $prices[$i]->id;
            $pr[$i]['currency_id'] = $prices[$i]->currency_id;
            $pr[$i]['amount_format'] = number_format($prices[$i]->amount, 2, ',', '.');
            $pr[$i]['iso'] = $prices[$i]->currency->iso;
            $pr[$i]['symbol'] = $prices[$i]->currency->symbol;
        }

        return response()->json(['prices' => $pr]);
    }

    public function ratePage()
    {
        $prices = Price::with(['currency:id,iso,symbol', 'country:id,name,'])->get();

        for ($i = 0; $i < count($prices); $i++) {
            $pr[$i]['iso'] = $prices[$i]->currency->iso;
            $pr[$i]['symbol'] = $prices[$i]->currency->symbol;
            $pr[$i]['amount_format'] = number_format($prices[$i]->amount, 2, ',', '.');
        }

        return view('pages.rate', compact('pr'));
    }

    public function reset()
    {
        Price::query()->delete();
        $currencies = Currency::active()->get();
        for ($i = 0; $i < count($currencies); $i++) {
            $price = new Price([
                'amount' => 100,
                'notes' => $currencies[$i]->iso,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            $price->save();
        }
        return redirect('/prices');
    }
}
