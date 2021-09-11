<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'cors',
    'middleware' => 'api', 'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('forgot-password', 'PasswordResetController@create');
    Route::get('check-token/{email}/{token}', 'PasswordResetController@checkToken');
    Route::put('update-password', 'UserController@updatePassword');
    Route::get('email-verify/{email}', 'UserController@emailV');
    Route::get('phone-verify/{phone}', 'CustomerController@phoneV');
    Route::post('register', 'CustomerController@store');
});

Route::group(['middleware' => 'cors', 'middleware' => 'auth:api'], function () {
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

    // Customers
    Route::group(['prefix' => 'customers'], function () {
        Route::get('/', 'CustomerController@index');
        Route::get('/all', 'CustomerController@indexAll');
        Route::get('/latest', 'CustomerController@atest');
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
        Route::get('email-verify/{email}', 'UserController@emailV');
        Route::get('dni-verify/{dni}', 'CustomerController@dniV');
        Route::get('phone-verify/{phone}', 'CustomerController@phoneV');
        Route::get('total/', 'CustomerController@totalCalculate');
    });

    Route::group(['prefix' => 'payments'], function () {
        Route::get('/', 'PaymentController@index');
        Route::get('my-payments', 'PaymentController@authCustomerPayments');
        Route::get('customer-for-stats', 'PaymentController@customerForStats');
        Route::get('get-for-stats', 'PaymentController@getForStats');
        Route::get('counts', 'PaymentController@indexCount');
        Route::get('all-active', 'PaymentController@indexActive');
        Route::post('store', 'PaymentController@store');
        Route::post('store-for-all', 'PaymentController@storeByAdmin');
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

    // User Model
    Route::group(['prefix' => 'user'], function () {
        Route::get('profile', 'UserController@profile')->name('users.profile');
        Route::post('check-auth', 'UserController@checkAuth')->name('users.checkPass');
        Route::put('update-data/{user}', 'UserController@update')->name('users.updateData');
        Route::put('update-own-data/', 'UserController@updateOwnData')->name('users.updateOwnData');
        Route::put('change-password', 'UserController@profileUpdatePassword')->name('users.changePass');
        Route::get('get-avatar/{user}', 'UserController@getAvatar')->name('users.getAvatar');
        Route::post('update-avatar/{user}', 'UserController@updateAvatar')->name('users.updateAvatar');
        Route::get('show/{id}', 'UserController@show')->name('users.show');
        Route::post('register', 'UserController@adminRegisterUsers')->name('users.register');
        Route::delete('delete/{user}', 'UserController@deleteUser')->name('users.delete');
    });
});
