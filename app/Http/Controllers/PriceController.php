<?php

namespace App\Http\Controllers;

use App\Models\Price;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class PriceController extends Controller
{
    public function index()
    {
        $prices = Price::with('currency:id,iso')->get();
        return response()->json(['prices' => $prices->toArray()]);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'amount' => 'required|numeric',
            'currency_id' => 'required|numeric',
        ]);
        if($validator->fails()){
            return response()->json($validator->messages(), 403);
        }

        $price = new Price ([
            'amount' => $request->amount,
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

    public function update(Request $request,$id )
    {
        $validator = Validator::make($request->all(),[
            'amonunt' => 'required|numeric'
        ]);
        if($validator->fails()){
            return response(['error' => $validator->messages()], 403);
        }

        Price::where('id',$request->id)->update([
            'amount' => $request->amount,
            'notes' => $request->notes,
            'currency_id' => $request->currency_id,
            'country_id' => $request->country_id,
        ]);


        return response()->json(['message' => 'updated'], 200);
    }

    public function getPrice()
    {
        $prices = Price::with('currency:id,iso,symbol')->get();
        $pr = [];
        $discount = 0;
        $user = Auth::user();

        for ($i=0; $i < count($prices) ; $i++) {
            $pr[$i]['amount'] = $prices[$i]->amount;
            $pr[$i]['id'] = $prices[$i]->id;
            $pr[$i]['currency_id'] = $prices[$i]->currency_id;
            $pr[$i]['amount_format'] = number_format($prices[$i]->amount,2,',','.');
            $pr[$i]['iso'] = $prices[$i]->currency->iso;
            $pr[$i]['symbol'] = $prices[$i]->currency->symbol;
        }

        return response()->json(['prices' =>$pr]);
    }

    public function ratePage()
    {
        $prices = Price::with(['currency:id,iso,symbol','country:id,name,'])->get();

        for ($i=0; $i < count($prices) ; $i++) {
            $pr[$i]['iso'] = $prices[$i]->currency->iso;
            $pr[$i]['symbol'] = $prices[$i]->currency->symbol;
            $pr[$i]['amount_format'] = number_format($prices[$i]->amount,2,',','.');
        }

        return view('pages.rate', compact('pr'));
    }

    public function reset()
    {
        Price::query()->delete();
        $currencies = Currencies::active()->get();
        for ($i=0; $i <count($currencies) ; $i++) {
            $price = new Price ([
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
