<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReactionController extends Controller
{
    public function comment(Request $request){
        return response()->json(['data'=>$request->all()]);
    }
}
