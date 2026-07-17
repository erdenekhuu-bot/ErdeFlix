<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Movie extends Model
{
    protected $table = 'movies';
    protected $primaryKey = 'id';
    protected $fillable = [
        'title',
        'attribute',
        'poster',
        'runtime',
        'rating',
        'status',
        'video_id',
        'genre_id'
    ];

    protected $hidden = ['created_at', 'updated_at'];

    protected $with = ['video'];

    public function video(): BelongsTo
    {
        return $this->belongsTo(Video::class, 'video_id','id');
    }
}
