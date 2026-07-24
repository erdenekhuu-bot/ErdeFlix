<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'permission:access user dashboard'])->group(function () {
    Route::inertia('/profiles','profiles')->name('profiles');
});
