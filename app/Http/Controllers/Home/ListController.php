<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ListController extends Controller
{
    public function list(Request $request): Response
{
    $param = $request->query('category') ?? "";

    $category = DB::table('categories')
        ->leftJoin('movies', 'categories.id', '=', 'movies.category_id')
        ->select(
            'categories.*',
            DB::raw('COUNT(movies.id) as movies_count')
        )
        ->groupBy('categories.id')
        ->get();

    $trendsQuery = DB::table('movies')
        ->leftJoin('categories', 'movies.category_id', '=', 'categories.id')
        ->select(
            'movies.*',
            'categories.name as category_name'
        );


    if (!empty($param)) {
        $trendsQuery->where('categories.name', 'LIKE', trim($param));
    }

    $trends = $trendsQuery->orderBy('movies.created_at', 'desc')->get();

    return Inertia::render('category', [
        'url' => '/list',
        'records' => $trends,
        'category' => $category
    ]);
}
}
