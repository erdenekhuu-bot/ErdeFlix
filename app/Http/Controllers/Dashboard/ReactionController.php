<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReactionController extends Controller
{
    public function list():Response {
        return Inertia::render('dashboard/reaction/List');
    }
}
