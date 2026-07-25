<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DemoController extends Controller
{
    public function watch($id) {
        $movie = Video::find($id);

        if ($movie) {
            $hlsUrl = Storage::disk('public')->url($movie->path . '/index.m3u8');
        } else {
            return Inertia::render('player', [
                'detail' => $movie,
                'error' => 'Movie or video not found'
            ]);
        }
        return Inertia::render('player', ['hlsUrl' => $hlsUrl, 'detail' => $movie]);
    }
}
