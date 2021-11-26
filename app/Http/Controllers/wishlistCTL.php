<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\wishlist;
use App\Models\product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class wishlistCTL extends Controller
{
    public function count(Request $request)
    {
        $cook = $request->cookie('_ltsi');
        $code = unserialize(base64_decode($cook));
        $num = 0;
        if($cook && isset($code['wishlist'])){
                $num = count($code['wishlist']);
        }
        
        return response()->json($num, 200);
    }
    public function remove(Request $request)
    {   
        $newA = [];
        $state = 400;
        $cook = $request->cookie('_ltsi');
        $code = unserialize(base64_decode($cook));
        if($cook){
            if(in_array($request->id,$code['wishlist'])){
                foreach ($code['wishlist'] as $value) {
                    if ($value != $request->id) {
                        array_push($newA,$value);
                    }
                }
                $state = 200;
                $code['wishlist'] = $newA;
            }
        }
        return response()->json(["state" => $state], $state)->cookie('_ltsi',base64_encode(serialize($code)),50000);;
    }
    public function get(Request $request)
    {
        $cook = $request->cookie('_ltsi');
        $code = unserialize(base64_decode($cook));
        $results = [];
        if ($cook  && isset($code['wishlist']) && count($code['wishlist']) ) {
            $raw_recent = 'SELECT p.status, p.id AS product_id,p.price,p.preview_front_image AS image,p.name FROM products p WHERE p.id in (product_array)';
            $db_string = Str::replace('product_array' , implode(',' , $code['wishlist']) , $raw_recent );
            $results = DB::select( DB::raw($db_string));
        } else {
            return response()->json(['message' => 'wishlist empty','status' => 500], 200);
        }

        return response()->json([
            'items' => $results,
            'status' => 200,
        ], 200);
        
    }
    public function add(Request $request)
    {
        $cook = $request->cookie('_ltsi');
        $code = unserialize(base64_decode($cook));
        if ($cook) {
            $wishlist = [];
            if (isset($code['wishlist']) ) {
                if (in_array($request->id,$code['wishlist'])) {
                    return response()->json(['message' => 'already exist'], 500);
                }
                $wishlist = $code['wishlist'];
            }
            array_push($wishlist,$request->id);
            $code['wishlist'] = $wishlist;
        } else {
            $code['wishlist'] = [$request->id];
        }
        
        return response()->json([],200)->cookie('_ltsi',base64_encode(serialize($code)),50000);
    }

    
}
