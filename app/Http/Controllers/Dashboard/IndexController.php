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

// class EditLoginController extends AuthenticatedSessionController 
// {
//     public function __construct(StatefulGuard $guard)
//     {
//         parent::__construct($guard);
//     }

//     public function store(LoginRequest $request)
//     {
//         return $this->loginPipeline($request)->then(function ($request) {
//             $user = $request->user();

//             if ($user->hasPermissionTo('access admin dashboard') && $user->can('view-dashboard')) {
//                 return redirect()->route('dashboard');
//             }

//             if ($user->hasPermissionTo('access user dashboard') && $user->can('view-profiles')) {
//                 return redirect()->route('profiles');
//             }
            
//             return redirect()->route('home');
        
//         });
//     }
// }
