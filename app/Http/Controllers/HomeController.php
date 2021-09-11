<?php

namespace App\Http\Controllers;

use App\Http\Resources\PriceResource;
use App\Models\Price;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $prices = PriceResource::collection(Price::with('currency:id,iso,name,symbol,locale')->active()->get());
        return view('home')->with(['prices' => $prices]);
    }

    public function coming()
    {
        return view('coming-soon');
    }
}
