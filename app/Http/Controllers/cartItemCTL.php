<?php

namespace App\Http\Controllers;

use App\Models\cartItem;
use Illuminate\Http\Request;
use App\Models\product;
use App\Models\productCombination;
use App\Models\shoppingSession;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class cartItemCTL extends Controller
{
    public function add(Request $request){
        $user = $request->user();

        $product = Product::where(["unique_id"=>$request->product_unique_id,'product_combinations.id'=> $request->combination_id ])
        ->select('products.unique_id','products.name','products.name')
        ->selectRaw('(SELECT front FROM image_galleries WHERE image_galleries.id = product_combinations.image_gallery_id) AS image')
        ->selectRaw('CASE 
                            WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) IS NULL THEN product_combinations.price
                            ELSE (SELECT (product_combinations.price - d.percentage*product_combinations.price) FROM product_discounts d WHERE d.product_id = products.id ) 
                        END AS price')
        ->join('product_combinations','product_combinations.product_id','=','products.id')
        ->get()->first();

        $total = 0;

        if($user){
            if(cartItem::where('combination_id',$request->combination)->get()->count())
                return response()->json(['err'=>'error'], 500);
            $newCart = new cartItem;
            $newCart->combination_id = $request->combination;
            $newCart->quantity = $request->quantity;
            $newCart->shopping_session_id = $user->session->id;
            $newCart->price = $product->price;
            $newCart->save();
            $total = cartItem::where('shopping_session_id',$user->session->id)
            ->selectRaw('(SELECT SUM(price*quantity))AS total')
            ->get()->first()->total;

            return response()->json([
                'item' => [
                    'name' => $product->name,
                    'combination_id' => $request->combination,
                    'quantity' => $request->quantity,
                    'unique_id' => $product->unique_id,
                    'image' => $product->image,
                    'price' => $product->price,
                ],
                'total' => $total],201);
    
        }
        else
        {    
            $cook = $request->cookie('_ltsi');
            $total =  ($product->price*$request->quantity);
            $code = unserialize(base64_decode($cook));
            $temp = ($product->price*$request->quantity);
            if ($cook) {
                if (isset($code['total'])) {
                    $total = $code['total'];

                }
                if (isset($code['cart']) ) {
                    if (isset($code['cart'][$request->combination_id])) {
                        return response()->json(['message' => 'already exist'], 500);
                    }
                }
                
                $total += $temp;
                $code['cart'][$request->combination_id] = ["unique_id" => $request->product_unique_id , 'qty' => $request->quantity,'combination_id' => $request->combination_id];
                $code['total'] = $total;

            } else {
                $code['cart'][$request->combination] = ['product_unique_id' => $request->product_unique_id,'qty' => $request->quantity,"combination_id" => $request->combination];
                $code['total'] = $temp ;
                $total = $temp;

            }

            return response()->json([
                'item' => [
                    'name' => $product->name,
                    'quantity' => $request->quantity,
                    'unique_id' => $product->unique_id,
                    'combination_id' => $request->combination_id,
                    'image' => $product->image,
                    'price' => $product->price,
                ],
                'total' => $total,
            ], 201)->cookie('_ltsi',base64_encode(serialize($code)),50000);
    
        }

    }

    public function get(Request $request)
    {
        $user = $request->user();
        if($user) {
            $prod = cartItem::where('shopping_session_id',$user->session->id)
            ->join('product_combinations','product_combinations.id','=','cart_items.combination_id')
            ->join('products','products.id','=','product_combinations.product_id')
            ->select('cart_items.id AS cart_id','products.name','quantity','products.unique_id AS unique_id','product_combinations.id AS combination_id')
            ->selectRaw('CASE 
            WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) IS NULL THEN product_combinations.price
            ELSE (SELECT (product_combinations.price - d.percentage*product_combinations.price) FROM product_discounts d WHERE d.product_id = products.id ) 
            END AS price')
            ->selectRaw('(SELECT front FROM image_galleries WHERE image_galleries.id = product_combinations.image_gallery_id) AS image')
            ->get();
            return response()->json([
                'items' => $prod,
                'total' => cartItem::where('shopping_session_id',$user->session->id)
                ->selectRaw('(SELECT SUM(price*quantity))AS total')
                ->get()->first()->total,
                'status' => 200
            ], 200);
        }
        else
        {    
            $cook = $request->cookie('_ltsi');
            $code = unserialize(base64_decode($cook));
            $result = [];
            if ($cook  && isset($code['cart']) && count($code['cart']) ) {                
                // $end = '(test)';
                // str_replace('test',array_keys($code['cart']),$end);
                $products = productCombination::whereIn('product_combinations.id' ,array_keys($code['cart']) )
                ->select('products.name', 'products.unique_id AS unique_id', 'product_combinations.id as combination_id')
                ->selectRaw('CASE 
                            WHEN (SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) IS NULL THEN product_combinations.price
                            ELSE (SELECT (product_combinations.price - d.percentage*product_combinations.price) FROM product_discounts d WHERE d.product_id = products.id ) 
                            END AS price')
                ->selectRaw('(SELECT front FROM image_galleries WHERE image_galleries.id = product_combinations.image_gallery_id) AS image')
                ->join('products','products.id','=','product_combinations.product_id')
                ->get();
                // return $products;
                // $products = DB::select(' select `product_combinations`.`price`, `products`.`name`, 
                // `products`.`unique_id` as `unique_id`, `product_combinations`.`id` as `combination_id`, 
                // (SELECT front FROM image_galleries WHERE image_galleries.id = product_combinations.image_gallery_id) AS image from `product_combinations` 
                // inner join `products` on 
                // `products`.`id` = `product_combinations`.`product_id` 
                // where product_combinations.id in ('.implode(',' , array_keys($code['cart'])).')');
                foreach ($products as $value) {
                    array_push($result,[
                        'unique_id' => $value->unique_id,
                        'price' => $value->price,
                        'image' => $value->image,
                        'combination_id' => $value->combination_id,
                        'quantity' => (int)$code['cart'][$value->combination_id]['qty'],
                        'name' => $value->name
                    ]);
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
        
    }
  
    public function remove(Request $request){ 
        
        $user = $request->user();
        if($user){
            $test = cartItem::where('combination_id',$request->combination_id)->delete();
            return response()->json([
                'total'=> cartItem::where('shopping_session_id',$user->session->id)
            ->selectRaw('(SELECT SUM(price*quantity)) AS total')
            ->get()->first()->total,
            // 'test' => $test
        ], 200);
        }
        else{
            $code = unserialize(base64_decode($request->cookie('_ltsi')));

            $product = productCombination::find($request->combination_id);
            
            $total = $code['total'] - ($product->price*$code['cart'][$request->combination_id]['qty']);
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
            // 'message' => 'ok',
            // 'code' => $code,
            'total' => $total
        ], 200)->cookie('_ltsi',base64_encode(serialize($code)),50000);
        }
    }
    public function update(Request $request)
    {
        $user = $request->user();
        if($user) {
            $cart = cartItem::find($request->cart_id);
            switch ($request->action) {
                case 'INCREMENT':
                    $cart->quantity++;
                    break;
                case 'DECREMENT':
                    $cart->quantity--;
                    break;
                case 'SET':
                    $cart->quantity = $request->actualQuantity;
                    break;
                
                default:
                    break;
            }

            $cart->save(); 
            return response()->json([
                'total' => cartItem::where('shopping_session_id',$user->session->id)
                ->selectRaw('(SELECT SUM(price*quantity))AS total')
                ->get()->first()->total,
                'quantity' => $cart->quantity
     ], 200);

        }
        else {
            $code = unserialize(base64_decode($request->cookie('_ltsi')));
            $oldQuantity = $code['cart'][$request->combination_id]['qty'];
            $prod = productCombination::find($request->combination_id);
            $total = $code['total'];
            switch ($request->action) {
                case 'INCREMENT':
                    $total += $prod->price;
                    $code['cart'][$request->combination_id]['qty'] = $oldQuantity + 1;
                    break;
                case 'DECREMENT':
                    $total -= $prod->price;
                    $code['cart'][$request->combination_id]['qty'] = $oldQuantity -1;

                    break;
                case 'SET':
                    $total += ($prod->price*($request->actualQuantity-$oldQuantity));
                    $code['cart'][$request->combination_id]['qty'] = $request->actualQuantity;
                    break;
                default:
                    break;
            }

            $code['total'] = $total;
    }
        return response()->json(['total' => $total,'quantity' => $code['cart'][$request->combination_id]['qty']], 200)->cookie('_ltsi',base64_encode(serialize($code)),50000);
    }
}
