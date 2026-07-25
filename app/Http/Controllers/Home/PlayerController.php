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
        $movie = Video::find($id);

        if ($movie) {
            $hlsUrl = Storage::disk('public')->url($movie->path . '/index.m3u8');
        } else {
            return Inertia::render('player', [
                'detail' => $movie,
                'error' => 'Movie or video not found',
                'movie'=>$record
            ]);
        }
        return Inertia::render('player', ['hlsUrl' => $hlsUrl, 'detail' => $movie]);
    }
}
