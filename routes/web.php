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

Route::get('/auth/{any?}', function () {
    return view('welcome');
})->where('any', '.*');

Route::get('/panel_admin/{any?}', function () {
    return view('welcome');
})->where('any', '.*');

Route::get('/remesas/{any?}', function () {
    return view('welcome');
})->where('any', '.*');

Auth::routes();

// Route::get('/', [App\Http\Controllers\HomeController::class, 'coming'])->name('coming');
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('cache-c', function () {
    $e = 0;
    $e += Artisan::call('config:clear');
    $e += Artisan::call('cache:clear');
    $e += Artisan::call('config:cache');
    return 'DONE ' . $e; //Return anything
});
