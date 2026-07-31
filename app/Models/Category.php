<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

#[Table('categories', key: 'id')]
#[Fillable(['name', 'description'])]
class Category extends Model
{
    public function movie():HasOne
    {
        return $this->hasOne(Movie::class,'category_id','id');
    }
}
