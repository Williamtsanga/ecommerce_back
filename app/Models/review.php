<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class review extends Model
{
    use HasFactory;

    protected $fillable = [
         "message",
         "rate",
         "user_id",
         "product_id",
         "email",
         "name"
     ];
}
