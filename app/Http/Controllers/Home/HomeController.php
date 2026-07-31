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
       return Inertia::render('welcome',[
            'banner' => asset('asset/screen.png'),
        'url'=>'/',
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
            )
        ),
        'feature'=>$feature
        ]);
    }
}
