<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Video;
use Illuminate\Support\Facades\DB;

class PlayerController extends Controller
{
     public function watch($id) {
        $movie = Video::with('movie.category')->find($id);
        $list=DB::table('movies')
        ->where('category_id', '=', $movie->movie->category->id)
        ->where('name', 'like', '%' . mb_substr($movie->movie->name, 0, 11) . '%')
        ->limit(4)->get();

        if ($movie) {
            $hlsUrl = Storage::disk('public')->url($movie->path . '/index.m3u8');
        } 
        return Inertia::render('player', ['hlsUrl' => $hlsUrl, 'detail' => $movie, 'list' => $list]);
    }
}
