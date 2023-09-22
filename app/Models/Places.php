<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Places extends Model
{
    use HasFactory;

    protected $table = 'table_wisata';

    protected $fillable = [
        'namatempat', 
        'alamat', 
        'desc' ,
    ];

    
    protected $casts = [
        'created_at' => 'datetime',
    ];

    /*public static function booted()
    {
      static::creating(function (Model $model) {
        $model->batch_potong_id = 'PTG' . str_pad(static::max('id') + 1, 4, 0, STR_PAD_LEFT);
      });
    }*/
}
