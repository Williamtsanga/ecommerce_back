<?php

namespace App\Http\Controllers;

use App\Models\cartItem;
use Illuminate\Http\Request;
use App\Models\product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class cartItemCTL extends Controller
{
    public function add(Request $request){

        $product = product::find($request->product);

        $cook = $request->cookie('_ltsi');
        $total =  ($product->price*$request->quantity);
        $code = unserialize(base64_decode($cook));
        $total = 0;
        $temp = ($product->price*$request->quantity);
        if ($cook) {
            if (isset($code['total'])) {
                $total = $code['total'];

            }
            if (isset($code['cart']) ) {
                if (isset($code['cart'][$request->product])) {
                    return response()->json(['message' => 'already exist'], 500);
                }
            }
            
            $total += $temp;
            $code['cart'][$request->product] = ["id" => $request->product , 'qty' => $request->quantity];
            $code['total'] = $total;

        } else {
            $code['cart'][$request->product] = ['id' => $request->product,'qty' => $request->quantity];
            $code['total'] = $temp ;
            $total = $temp;

        }

        return response()->json([
            'item' => [
                'name' => $product->name,
                'quantity' => $request->quantity,
                'product_id' => $product->id,
                'image' => $product->front_image,
                'price' => $product->price,
            ],
            'total' => $total,
            // 'TEST1' => base64_encode(serialize([])),
        ], 200)->cookie('_ltsi',base64_encode(serialize($code)),50000);
    }

    public function get(Request $request)
    {
        $cook = $request->cookie('_ltsi');
        $code = unserialize(base64_decode($cook));
        $result = [];
        if ($cook  && isset($code['cart']) && count($code['cart']) ) {
            $raw_recent = 'SELECT p.id AS product_id,p.price,p.preview_front_image AS image,p.name FROM products p WHERE p.id in (product_array)';
            $db_string = Str::replace('product_array' , implode(',' , array_keys($code['cart'])) , $raw_recent );
            $recent = DB::select( DB::raw($db_string));
            foreach ($recent as $value) {
                $result[$value->product_id] = [
                    'product_id' => $value->product_id,
                    'price' => $value->price,
                    'image' => $value->image,
                    'quantity' => (int)$code['cart'][$value->product_id]['qty'],
                    'name' => $value->name
                ];
            }

        } else {
            return response()->json(['message' => 'cart empty','status' => 500], 200);
        }

        return response()->json([
            'items' => $result,
            'total' => $code['total'],
            'status' => 200,
        ], 200);
        
    }
  
    public function remove(Request $request){   

            $code = unserialize(base64_decode($request->cookie('_ltsi')));

            $product = product::find($request->id);
            
            $total = $code['total'] - ($product->price*$code['cart'][$request->id]['qty']);
            unset($code['cart'][$request->id]);

            // $cart = $request->session()->get('cart');
            // if(isset($cart[$request->id])){
            //     $request->session()->put('cart',$cart);
            //     if(count($cart)){
            //         $total = $total - $product->price*$cart[$request->id]['quantity'];
            //     }
            //     else {
            //         $total = 0;
            //     }
            //     unset($cart[$request->id]);

            // }
            // $request->session()->put('total_cart',$total);
            // $request->session()->put('cart',$cart);
            $code['total'] = $total;
        return response()->json([
            'message' => 'ok',
            'code' => $code,
            'total' => $total
        ], 200)->cookie('_ltsi',base64_encode(serialize($code)),50000);
    }
    public function update(Request $request)
    {
        $code = unserialize(base64_decode($request->cookie('_ltsi')));
        $newUpdate = $code['cart'][$request->id]['qty'];
        $prod = product::find($request->id);
        $total = $code['total'];
        if($request->action == 'INCREMENT'){
            $total += $prod->price;
            $code['cart'][$request->id]['qty'] = $newUpdate + 1;
        }
        else if ($request->action == 'DECREMENT') {
            $total -= $prod->price;
            $code['cart'][$request->id]['qty'] = $newUpdate -1;
        }
        else {}
        

        $code['total'] = $total;
        return response()->json(['code' => $code], 200)->cookie('_ltsi',base64_encode(serialize($code)),50000);
    }
}
