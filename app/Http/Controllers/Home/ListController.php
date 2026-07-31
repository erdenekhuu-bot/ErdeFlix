<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ListController extends Controller
{
    public function list(Request $request):Response
    {
        $category=DB::table('categories')->get();
        return Inertia::render('category',['url'=>'/list',
        'records' => array(
            array(  'title' => 'Demo Movie 1',
                'description' => 'Lorem ipsum dolor sit amet.',
                'image' => asset('asset/feature1.png'),
                'kind' => 'Movie',
                'date' => '2026-07-17'
            ),
            array('title' => 'Demo Movie 2',
                'description' => 'Consectetur adipiscing elit.',
                'image' => asset('asset/feature2.png'),
                'kind' => 'Series',
                'date' => '2026-07-18'
            ),
            array( 'title' => 'Demo Movie 3',
                'description' => 'Sed do eiusmod tempor incididunt.',
                'image' => asset('asset/feature3.png'),
                'kind' => 'Movie',
                'date' => '2026-07-19'
            ),
            array( 'title' => 'Demo Movie 3',
                'description' => 'Sed do eiusmod tempor incididunt.',
                'image' => asset('asset/feature3.png'),
                'kind' => 'Movie',
                'date' => '2026-07-19'
            ),
            array( 'title' => 'Demo Movie 3',
                'description' => 'Sed do eiusmod tempor incididunt.',
                'image' => asset('asset/feature3.png'),
                'kind' => 'Movie',
                'date' => '2026-07-19'
            ),
            array( 'title' => 'Demo Movie 3',
                'description' => 'Sed do eiusmod tempor incididunt.',
                'image' => asset('asset/feature3.png'),
                'kind' => 'Movie',
                'date' => '2026-07-19'
            )
        ),
        'category'=>$category
        ]);
    }
}
