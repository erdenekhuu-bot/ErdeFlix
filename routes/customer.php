<?php

namespace App\Http\Controllers\Customer;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'permission:access user dashboard'])->group(function () {
    Route::get('/profiles', [Profile::class, 'index'])->name('profiles');
});
