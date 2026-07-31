<?php

namespace App\Http\Controllers\Home;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function(){
    Route::get('',[HomeController::class,'home'])->name('home');
    Route::get('/list',[ListController::class,'list'])->name('list');
    Route::get('/append',[AppendController::class,'list'])->name('append');
    Route::get('/player/{id}',[PlayerController::class,'watch'])->name('player');
});

require __DIR__.'/settings.php';
require __DIR__.'/board.php';
require __DIR__.'/customer.php';
