<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api', 'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

// Route::group(['middleware' => 'auth:api'], function () {

    Route::group(['prefix' => 'sales'], function () {
        Route::get('/', 'PaymentController@index');
        Route::get('all', 'PaymentController@all');
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

    Route::group(['prefix' => 'customers'], function () {
        Route::get('/', 'CustomerController@index');
        Route::post('store', 'CustomerController@store');
        Route::get('count', 'CustomerController@indexCount');
        Route::get('show/{customer}', 'CustomerController@show');
        Route::get('search/', 'CustomerController@search');
        Route::get('search-admin/{name}', 'CustomerController@searchAdmin');
        Route::get('edit/{customer}', 'CustomerController@edit');
        Route::put('update/{customer}', 'CustomerController@update');
        Route::put('approve/{customer}', 'CustomerController@approve');
        Route::put('desactive', 'CustomerController@desactive');
        Route::put('activate/{customer}', 'CustomerController@activate');
        Route::delete('destroy/{customer}', 'CustomerController@destroy');
        Route::get('email-verify/{email}', 'CustomerController@emailV');
        Route::get('dni-verify/{dni}', 'CustomerController@dniV');
        Route::get('phone-verify/{phone}', 'CustomerController@phoneV');

        Route::get('total/', 'CustomerController@totalCalculate');
    });

    Route::group(['prefix' => 'banks'], function () {
        Route::get('/', 'BankController@index');
        Route::get('active', 'BankController@indexActive');
        Route::post('store', 'BankController@store');
        Route::get('show/{bank}', 'BankController@show');
        Route::get('edit/{bank}', 'BankController@edit');
        Route::post('update/{bank}', 'BankController@update');
        Route::post('desactive', 'BankController@desactive');
        Route::post('activate', 'BankController@activate');
        Route::delete('destroy/{bank}', 'BankController@destroy');
    });

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

    Route::get('prices', 'PriceController@index');
    Route::group(['prefix' => 'price'], function () {
        Route::post('store', 'PriceController@store');
        Route::get('show/{id}', 'PriceController@show');
        Route::get('eur', 'PriceController@getEur');
        // Route::get('edit/{id}', 'PriceController@edit');
        Route::put('update/{id}', 'PriceController@update');
        // Route::post('desactive', 'PriceController@desactive');
        Route::put('activate', 'PriceController@activate');
        // Route::delete('destroy/{id}', 'PriceController@destroy');
    });

    Route::group(['prefix' => 'currencies'], function () {
        Route::get('/', 'CurrencyController@index');
        Route::post('store', 'CurrencyController@store');
        Route::get('show/{currency}', 'CurrencyController@show');
        // Route::get('edit/{id}', 'CurrencyController@edit');
        Route::put('update/{currency}', 'CurrencyController@update');
        Route::put('desactive/{currency}', 'CurrencyController@desactive');
        Route::put('activate/{currency}', 'CurrencyController@activate');
        Route::delete('destroy/{currency}', 'CurrencyController@destroy');
    });

    Route::group(['prefix' => 'balances'], function (){
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
