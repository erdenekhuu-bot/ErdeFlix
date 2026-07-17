<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Address extends Model
{
    protected $table = 'addresses';
    protected $primaryKey = 'id';
    protected $fillable =['ip','country'];

    protected $hidden = ['created_at','updated_at'];

    protected $with = ['record'];

    public function record():HasOne
    {
        return $this->hasOne(Record::class, 'address_id', 'id');
    }
}
