<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;

class VideoController extends Controller
{
    public function list():Response {
        $list=DB::table('videos')->orderBy('id', 'asc')->paginate(5);
        return Inertia::render('dashboard/video/List',['list'=>$list]);
    }
}
