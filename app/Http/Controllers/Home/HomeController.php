<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
class HomeController extends Controller
{
    public function home(Request $request):Response
    {
       $feature=DB::table('movies')->where('attribute','most')->first();
       $trends = DB::table('movies')
        ->leftJoin('categories', 'movies.category_id', '=', 'categories.id')
        ->select(
            'movies.*',
            'categories.name as category_name'
        )->orderBy('movies.created_at', 'desc')->limit(10)->get();

       return Inertia::render('welcome',[
            'banner' => asset('asset/screen.png'),
            'url'=>'/',
            'records' => $trends,
            'feature'=>$feature
        ]);
    }
}
