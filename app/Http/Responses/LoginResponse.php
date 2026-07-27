<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;


class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        if ($request->wantsJson()) {
            return response()->json([
                'two_factor' => false,
            ]);
        }

        $user = $request->user();

        if ($user->hasPermissionTo('access admin dashboard')) {
            return redirect()->route('dashboard');
        }

        if ($user->hasPermissionTo('access user dashboard')) {
            return redirect()->route('profiles');
        }

        return redirect()->route('home');
    }
}