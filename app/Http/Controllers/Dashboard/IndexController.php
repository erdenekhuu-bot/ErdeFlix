<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Http\Requests\LoginRequest;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Contracts\LoginResponse;
use Illuminate\Contracts\Auth\StatefulGuard;

class IndexController extends Controller
{
    public function info(): Response
    {
        return Inertia::render('dashboard/Dashboard');
    }
}
