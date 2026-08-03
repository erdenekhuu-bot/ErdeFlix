<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class Profile extends Controller
{
    public function index(Request $request):Response
    {
        $user = Auth::user();
        return Inertia::render('profiles', [
            'user' => $user,
        ]);
    }
   
}
