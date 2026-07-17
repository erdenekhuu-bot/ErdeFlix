<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Record extends Model
{
    protected $table = 'records';
    protected $primaryKey = 'id';
    protected $fillable = ['address_id','type'];

    protected $hidden = ['created_at','updated_at'];
    protected $casts = ['address_id'=>'integer','type'=>'string'];
    protected $with = ['address'];

    public function address():BelongsTo
    {
        return $this->hasOne(Address::class, 'address_id', 'id');
    }
}
