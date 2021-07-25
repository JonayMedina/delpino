<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(
    ['middleware' => 'cors'],
    function () {
        Route::get('/panel/{any?}', function () {
            return view('welcome');
        })->where('any', '.*');

        Auth::routes();

        Route::get('/', [App\Http\Controllers\HomeController::class, 'coming'])->name('coming');
        Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

        Route::get('cache-c', function () {
            $exitCode = Artisan::call('config:clear');
            $exitCode = Artisan::call('cache:clear');
            $exitCode = Artisan::call('config:cache');
            return 'DONE'; //Return anything
        });
    }
);
