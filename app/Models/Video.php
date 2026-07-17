<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Video extends Model
{
    protected $table = 'videos';
    protected $fillable = ['name', 'path'];
    protected $hidden = ['created_at', 'updated_at'];

    public function movie(): HasOne
    {
        return $this->hasOne(Movie::class, 'video_id','id');
    }
}
