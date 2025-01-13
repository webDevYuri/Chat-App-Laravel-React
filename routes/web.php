<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('App');
});

Route::get('{any}', function () {
    return view('App');
})->where('any', '.*');

