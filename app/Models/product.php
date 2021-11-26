<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'flash',
        'describtion',
        'summary',
        'category',
        'subcategory',
        'category_id',
        'subcategory_id',
        'price',
        'additional_infos',
        'status',
        'preview_front_image',
        'preview_rear_image'
    ];
}
