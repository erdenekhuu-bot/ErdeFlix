<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

#[Table('videos', key: 'id')]
#[Fillable(['name', 'path'])]
class Video extends Model
{
    public function movie(): HasOne
    {
        return $this->hasOne(Movie::class, 'video_id', 'id');
    }
}
