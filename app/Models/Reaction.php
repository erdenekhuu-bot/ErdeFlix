<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table('reactions', key: 'id')]
#[Fillable(['movie_id', 'user_id', 'type', 'like', 'dislike', 'comment'])]
class Reaction extends Model
{
    //
}
