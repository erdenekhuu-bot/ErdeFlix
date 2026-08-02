<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReactionController extends Controller
{
    public function comment(Request $request){
        $list=DB::table('movies')->where('name', 'like', "%{$request->search}%")->orderBy('id', 'asc')->limit(5)->get();
        return response()->json(['movies'=>$list]);
    }
}
