<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

#[Table('movies', key: 'id')]
#[Fillable(['name', 'movie_created_date','description','attribute','view','rating'])]
class Movie extends Model
{
    public function video(): BelongsTo
    {
        return $this->belongsTo(Video::class, 'video_id', 'id');
    }

    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class,'category_id','id');
    }
}
