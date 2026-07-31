<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AppendController extends Controller
{
    public function list(Request $request):Response 
    {
        $list=DB::table('movies')->orderBy('id', 'asc')->paginate(5);
        $category=DB::table('categories')->get();
        return Inertia::render('append',['list'=>$list,'genre'=>$category]);
    }
}
