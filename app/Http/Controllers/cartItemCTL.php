<?php

namespace App\Http\Controllers;

use App\Models\cartItem;
use Illuminate\Http\Request;
use App\Models\product;
use App\Models\shoppingSession;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class cartItemCTL extends Controller
{
    public function try(Request $request)
    {
        if($request->user())

            return $request->user()->session;
        else
            return "maff";
    }
    public function add(Request $request){
        $user = $request->user();

        $product = Product::where(["unique_id"=>$request->product,'product_combinations.id'=> $request->combination ])
        ->selectRaw('(SELECT d.percentage FROM product_discounts d WHERE d.product_id = products.id) AS discount')
        ->join('product_combinations','product_combinations.product_id','=','products.id')
        ->select('products.id AS product_id','products.unique_id','products.name','product_combinations.price','products.preview_front_image AS image','products.name')
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
                    'product_id' => $product->product_id,
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
                    'unique_id' => $product->unique_id,
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
            ->select('product_combinations.price','products.name','quantity','products.unique_id AS unique_id','product_combinations.id AS comb_id','products.preview_front_image AS image')
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
        {    $cook = $request->cookie('_ltsi');
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
        
    }
  
    public function remove(Request $request){ 
        
        $user = $request->user();
        if($user){
            $test = cartItem::where('combination_id',$request->comb_id)->delete();
            return response()->json([
                'total'=> cartItem::where('shopping_session_id',$user->session->id)
            ->selectRaw('(SELECT SUM(price*quantity)) AS total')
            ->get()->first()->total,
            'id' => $request->comb_id,
            'test' => $test
        ], 200);
        }
        else{
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
