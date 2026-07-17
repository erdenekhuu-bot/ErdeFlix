<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function(){
    Route::inertia('', 'welcome', [
        'banner' => asset('asset/screen.png'),
        'feature1' => asset('asset/feature1.png'),
        'url'=>'/'
    ])->name('home');
    Route::inertia('/list','category',['url'=>'/list'])->name('list');
    Route::inertia('/append','append',['url'=>'/append'])->name('append');
    Route::inertia('/favorite','favorite',['url'=>'/favorite'])->name('favorite');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
