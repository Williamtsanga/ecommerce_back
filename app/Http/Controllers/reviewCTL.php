<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\review;

class reviewCTL extends Controller
{
    // DATE_FORMAT(r.created_at,'%M %c,%Y')
    public function add(Request $req)
    {
        $add = review::create([
            'rate' => $req->rate,
            "message" => $req->message,
            "name" => $req->name,
            "email" => $req->email,
            "product_id" => $req->product_id
        ]);
        $rate = review::where('product_id',$req->product_id)->avg('rate');
        return response()->json([
            'new' => $add,
            'rate' => $rate
        ], 200);

    }
}
