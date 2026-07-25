<?php

namespace App\Http\Controllers\Home;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function(){
    Route::inertia('', 'welcome', [
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
        )
    ])->name('home');
    Route::inertia('/list','category',[
        'url'=>'/list',
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
        )
    ])->name('list');
    Route::get('/append',[AppendController::class,'list'])->name('append');
    Route::get('/player/{id}',[PlayerController::class,'watch'])->name('player');
});

require __DIR__.'/settings.php';
require __DIR__.'/board.php';
require __DIR__.'/customer.php';
