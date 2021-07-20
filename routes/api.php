<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api', 'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

// Route::group(['middleware' => 'auth:api'], function () {

// Bank
Route::group(['prefix' => 'banks'], function () {
    Route::get('/', 'BankController@index');
    Route::get('by-currency/{id}', 'BankController@byCurrency');
    Route::get('active', 'BankController@indexActive');
    Route::post('store', 'BankController@store');
    Route::get('show/{bank}', 'BankController@show');
    Route::get('edit/{bank}', 'BankController@edit');
    Route::put('update/{bank}', 'BankController@update');
    Route::put('desactive/{bank}', 'BankController@desactive');
    Route::put('activate/{bank}', 'BankController@activate');
    Route::delete('destroy/{bank}', 'BankController@destroy');
});

// Countries
Route::group(['prefix' => 'countries'], function () {
    Route::get('/', 'CountryController@index');
    Route::get('active', 'CountryController@indexActive');
    Route::post('store', 'CountryController@store');
    Route::get('show/{country}', 'CountryController@show');
    Route::get('edit/{country}', 'CountryController@edit');
    Route::post('update/{country}', 'CountryController@update');
    Route::post('desactive', 'CountryController@desactive');
    Route::post('activate', 'CountryController@activate');
    Route::delete('destroy/{country}', 'CountryController@destroy');
});

// Customers
Route::group(['prefix' => 'customers'], function () {
    Route::get('/', 'CustomerController@index');
    Route::get('/all', 'CustomerController@indexAll');
    Route::post('store', 'CustomerController@store');
    Route::get('count', 'CustomerController@indexCount');
    Route::get('show/{customer}', 'CustomerController@show');
    Route::get('search/', 'CustomerController@search');
    Route::get('search-admin/{name}', 'CustomerController@searchAdmin');
    Route::put('update/{customer}', 'CustomerController@update');
    Route::put('approve/{customer}', 'CustomerController@approve');
    Route::put('desactive/{customer}', 'CustomerController@desactive');
    Route::put('activate/{customer}', 'CustomerController@activate');
    Route::delete('destroy/{customer}', 'CustomerController@destroy');
    Route::get('email-verify/{email}', 'CustomerController@emailV');
    Route::get('dni-verify/{dni}', 'CustomerController@dniV');
    Route::get('phone-verify/{phone}', 'CustomerController@phoneV');
    Route::get('total/', 'CustomerController@totalCalculate');
});

Route::group(['prefix' => 'payments'], function () {
    Route::get('/', 'PaymentController@index');
    Route::get('all', 'PaymentController@indexAll');
    Route::get('all-active', 'PaymentController@indexActive');
    Route::post('store', 'PaymentController@store');
    Route::get('count', 'PaymentController@indexCount');
    Route::get('agent/{id}', 'PaymentController@indexAgent');
    Route::get('show/{id}', 'PaymentController@show');
    Route::get('edit/{id}', 'PaymentController@edit');
    Route::put('update/{id}', 'PaymentController@update');
    Route::put('desactive/{id}', 'PaymentController@desactive');
    Route::put('activate/{id}', 'PaymentController@activate');
    Route::delete('destroy/{id}', 'PaymentController@destroy');
});

// Prices
Route::group(['prefix' => 'prices'], function () {
    Route::get('/', 'PriceController@index');
    Route::post('store', 'PriceController@store');
    Route::get('show/{price}', 'PriceController@show');
    Route::put('update/{price}', 'PriceController@update');
    Route::put('desactive/{price}', 'PriceController@desactive');
    Route::put('activate/{price}', 'PriceController@activate');
    Route::delete('destroy/{price}', 'PriceController@destroy');
});

Route::group(['prefix' => 'currencies'], function () {
    Route::get('/', 'CurrencyController@index');
    Route::get('actives', 'CurrencyController@actives');
    Route::get('currencies-active/', 'CurrencyController@currencyActive');
    Route::post('store', 'CurrencyController@store');
    Route::get('show/{currency}', 'CurrencyController@show');
    // Route::get('edit/{id}', 'CurrencyController@edit');
    Route::put('update/{currency}', 'CurrencyController@update');
    Route::put('desactive/{currency}', 'CurrencyController@desactive');
    Route::put('activate/{currency}', 'CurrencyController@activate');
    Route::delete('destroy/{currency}', 'CurrencyController@destroy');
});

Route::group(['prefix' => 'balances'], function () {
    Route::get('/', 'BalanceController@index');
    Route::post('store', 'BalanceController@store');
    Route::put('update/{balance}', 'BalanceController@update');
    Route::put('add-btc/{balance}', 'BalanceController@addBtc');
    Route::put('desactive/{balance}', 'BalanceController@desactive');
    Route::put('activate/{balance}', 'BalanceController@activate');
    Route::delete('destroy/{balance}', 'BalanceController@destroy');
});

Route::get('percents', 'PercentController@index');
Route::group(['prefix' => 'percent'], function () {
    Route::post('store', 'PercentController@store');
    Route::get('show/{id}', 'PercentController@show');
    // Route::get('edit/{id}', 'PercentController@edit');
    Route::post('update/{id}', 'PercentController@update');
    Route::put('activate/{percent}', 'PercentController@activate');
    Route::get('get', 'PercentController@getActive');
    Route::get('set', 'PercentController@setPrice');
});

// });
