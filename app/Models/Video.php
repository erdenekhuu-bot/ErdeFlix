<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Hidden;

#[Table('videos', key: 'id')]
#[Fillable(['name', 'path'])]
class Video extends Model
{
    //
}
