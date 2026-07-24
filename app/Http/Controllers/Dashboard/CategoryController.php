<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;


class CategoryController extends Controller
{
    public function list():Response {
        $list=DB::table('categories')->orderBy('id', 'asc')->paginate(5);
        return Inertia::render('dashboard/category/List',['list'=>$list]);
    }

    public function create(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'required|string|max:255',
        ]);
        DB::table('categories')->insert($validated);
        return redirect()->back();
    }

    public function destory($id){
        DB::table('categories')->where('id', $id)->delete();
        return redirect()->back();
    }
}
