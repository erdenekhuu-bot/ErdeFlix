<?php

namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::post('/test',function(Request $request){
//     return json_encode($request->all());
// });
Route::post('/test',[ReactionController::class,'comment']);
