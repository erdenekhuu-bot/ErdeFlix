<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{
    public function list():Response {
        
       
        $list=DB::table('movies')->orderBy('id','asc')->paginate(5);
        return Inertia::render('dashboard/movie/List',['list'=>$list]);
    }

    public function formpage():Response{
        $videos=DB::table('videos')->orderBy('id', 'asc')->get();
        $categories=DB::table('categories')->orderBy('id','asc')->get();
        return Inertia::render('dashboard/movie/Create',['videos'=>$videos,'categories'=>$categories]);
    }

    public function create(Request $request):RedirectResponse {
       
       $validated = $request->validate([
            'name' => 'required|string|max:100',
            'poster' => 'nullable|image|mimes:jpeg,png,jpg', 
            'meta_banner' => 'nullable|image|mimes:jpeg,png,jpg',
            'movie_created_date' => 'nullable|date',
            'description' => 'nullable|string|max:255',
            'attribute' => 'nullable|string|max:255',
            'video_id' => 'required|exists:videos,id',
            'category_id' => 'required|exists:categories,id',
        ]);

        // Debug: Check if files are actually being received
        if ($request->hasFile('poster')) {
            \Log::info('Poster file found: ' . $request->file('poster')->getClientOriginalName());
        } else {
            \Log::info('No poster file found in request');
        }

        if ($request->hasFile('meta_banner')) {
            \Log::info('Banner file found: ' . $request->file('meta_banner')->getClientOriginalName());
        } else {
            \Log::info('No banner file found in request');
        }

        $posterPath = null;
        if ($request->hasFile('poster') && $request->file('poster')->isValid()) {
            $path = $request->file('poster')->store('movies/posters', 'public');
            $posterPath = '/storage/' . $path;
        }

        $bannerPath = null;
        if ($request->hasFile('meta_banner') && $request->file('meta_banner')->isValid()) {
            $path = $request->file('meta_banner')->store('movies/banners', 'public');
            $bannerPath = '/storage/' . $path;
        }

        DB::table('movies')->insert([
            'name' => $validated['name'],
            'poster' => $posterPath,
            'meta_banner' => $bannerPath,
            'movie_created_date' => $validated['movie_created_date'] ?? null,
            'description' => $validated['description'] ?? '',
            'view' => 0,
            'attribute' => $validated['attribute'] ?? '',
            'rating' => 0,
            'video_id' => $validated['video_id'],
            'category_id' => $validated['category_id'],
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back();
    
    }
}
