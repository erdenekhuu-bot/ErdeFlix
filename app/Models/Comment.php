<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Comment extends Model
{
    protected $table = 'comments';
    protected $primaryKey = 'id';
    protected $fillable = ['movie_id', 'user_id', 'title', 'comment'];

    protected $hidden = ['created_at', 'updated_at'];

    protected $with = ['user'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
}
