<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Hidden;

#[Table('movies', key: 'id')]
#[Fillable(['name', 'movie_created_date','description','attribute','view','rating'])]
class Movie extends Model
{
    //
}
