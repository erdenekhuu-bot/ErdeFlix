<?php

namespace App\Http\Controllers\Dashboard;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified', 'permission:access admin dashboard'])->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::get('',[IndexController::class,'info'])->name('dashboard');
        Route::get('categories', [CategoryController::class,'list'])->name('categories');
        Route::get('users', [UserController::class,'list'])->name('users');
        Route::get('movies', [MovieController::class,'list'])->name('movies');
        Route::get('videos', [VideoController::class,'list'])->name('videos');
        Route::get('reactions', [ReactionController::class,'list'])->name('reactions');
    });
});
