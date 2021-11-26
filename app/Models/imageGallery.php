<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class imageGallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'front',
        'rear',
        'left_side',
        'right_side',
    ];
}
