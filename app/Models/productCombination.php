<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productCombination extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'unique_key',
        'combination_string',
        'product_id',
        'image_gallery_id'
    ];
}
