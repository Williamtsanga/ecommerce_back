<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\category;
use App\Models\productDiscount;
use Str;
use DB;
use App\Models\productSubcategory;

class homeCTL extends Controller
{
    public function fetchAll(Request $request )
    {


        $categories = category::select('name','icon','unique_id')->get();
        // $disc = productDiscount::select('product_id')->where("active",true)->pluck("product_id")->toArray();

        // $raw_related_db = 'SELECT p.id,p.price,p.front_image,p.name , 
        // (SELECT d.percentage FROM product_discounts d WHERE d.product_id = p.id) AS discount  ,
        // (SELECT d.expires_at FROM product_discounts d WHERE d.product_id = p.id) AS discount_timeout
        // FROM products p WHERE p.id IN (3,5,6);
        // ';
        // $discount = DB::select( DB::raw($raw_related_db));

        // $result = array();
        // foreach ($categories as $value) {
        //     $fetch = productSubcategory::where('product_category_id' , $value->id)->get();
        //     array_push($result ,[$value->name => $fetch , "haveSub" => $fetch->count() > 0 ? true : false]);
        // }           
         

        return response()->json(
            ['categories' => $categories ,
            ], 200);
        // return response()->json(
        //     ['categories' => $result ,
        //     "discount" => $discount], 200);
        // return  view('pages.home',['categories' => $result , "discount" => $discount]);
        // return ['disc' => implode(',' , $disc),'categories' => $result , "discount" => $discount ];
    }
}
