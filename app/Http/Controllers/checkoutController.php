<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use DB;
use Auth;
use Str;
use Hash;
use Validator;
use Mongodb\BSON\ObjectID;
use App\Models\order;
use App\Models\User;
use App\Models\shoppingSession;
use App\Models\orderItem;
use App\Models\userAddr;
use App\Models\productCombination;
use App\Models\paymentDetail;

class checkoutController extends Controller
{
    public function getInfo(Request $request)
    {
        $user = $request->user();
        if($user){
            return $user->addresses;
        }else {
            return 'maff';
        }
    }
    public function placeOrder(Request $request)
    {
        $user = $request->user();
        if($user){
            
            return response()->json($request->input(), 200);
        } else {
            $userAddr = new userAddr;
            $userAddr_ship = new userAddr;            
            $order = new order;
            $token = '';
            $payment = new paymentDetail;
            $orderItems = new orderItem;


            $billing_validator = Validator::make($request->billing_address,[
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'email' => 'required|string',
                'company' => 'string',
                'address_1' => 'required|string',
                'address_2' => 'string',
                'city' => 'required|string',
                'country' => 'required|string',
                'zip' => 'required|string',
                'phone' => 'required|string',
                'state' => 'required|string',
            ]);
            if($billing_validator->fails()){
                $errs = $billing_validator->errors();
                
                return response()->json([
                    'success' => false,
                    "log" => "verify your forms",
                    'messages' => $errs,
                ], 500);
            }
            $userAddr_ship->first_name = $request->billing_address['first_name'];
            $userAddr_ship->last_name = $request->billing_address['last_name'];
            $userAddr_ship->email = $request->billing_address['email'];
            $userAddr_ship->address_1 = $request->billing_address['address_1'];
            $userAddr_ship->address_2 = $request->billing_address['address_2'];
            $userAddr_ship->first_name = $request->billing_address['first_name'];
            $userAddr_ship->phone = $request->billing_address['phone'];
            $userAddr_ship->zipCode = $request->billing_address['zip'];
            $userAddr_ship->first_name = $request->billing_address['first_name'];
            $userAddr_ship->country = $request->billing_address['country'];
            $userAddr_ship->state = $request->billing_address['state'];
            $userAddr_ship->city = $request->billing_address['city'];
            $userAddr_ship->company = $request->billing_address['company'] ?? null;
            $userAddr_ship->state = $request->billing_address['state'];
            $userAddr_ship->type = 'billing';
            $userAddr_ship->user_id = null;
            $userAddr_ship->save();

            if($request->address){
                $shipping_validator = Validator::make($request->shipping_address,[
                    'first_name' => 'required|string',
                    'last_name' => 'required|string',
                    'address_1' => 'required|string',
                    'address_2' => 'string',
                    'company' => 'string',
                    'city' => 'required|string',
                    'country' => 'required|string',
                    'zip' => 'required|string',
                    'state' => 'required|string',
                ]);
                if($shipping_validator->fails()){
                    $errs = $shipping_validator->errors();
                    
                    return response()->json([
                        'success' => false,
                        "log" => "verify your forms",
                        'messages' => $errs
                    ], 500);
                }

                $userAddr->first_name = $request->shipping_address['first_name'];
                $userAddr->last_name = $request->shipping_address['last_name'];
                $userAddr->address_1 = $request->shipping_address['address_1'];
                $userAddr->address_2 = $request->shipping_address['address_2'] ?? null;
                $userAddr->company = $request->shipping_address['company'] ?? null;
                $userAddr->first_name = $request->shipping_address['first_name'];
                $userAddr->phone = $request->shipping_address['phone'] ?? null;
                $userAddr->zipCode = $request->shipping_address['zip'];
                $userAddr->first_name = $request->shipping_address['first_name'];
                $userAddr->country = $request->shipping_address['country'] ;
                $userAddr->state = $request->shipping_address['state'];
                $userAddr->city = $request->shipping_address['city'];
                $userAddr->state = $request->shipping_address['state'];
                $userAddr->type = 'shipping';
                $userAddr->user_id = null;
                $userAddr->save();
    

            }

            if ($request->createAccount){
                $temp =  $this->register(['first_name' => $request->billing_address['first_name'],'c_password' => $request->billing_address['c_password'],'last_name' => $request->billing_address['last_name'], 'email' => $request->billing_address['email'],'password' => $request->billing_address['password']]);
                // return $temp;
                $user = $temp[1];
                $token = $temp[0];
            }

            $order->user_id = $user;
            $payment->user_id = $user;
            $payment->payment_method = 'orange money';
            $payment->amount = $request->total;
            $payment->status = 'processing';
            $payment->save();

            $order->payment_id = $payment->id;
            $order->status = 'processing';
            $order->user_addr_id = $request->address ? $userAddr->id :  $userAddr_ship->id;
            $order->additional_infos = $request->add_infos;
            $order->total = $request->total;
            $order->save();
            
            foreach ($request->ids as $key) {
                $orderItems = new orderItem;
                $orderItems->combination_id = $key['id'];
                $orderItems->order_id = $order->id;
                $orderItems->quantity =$key['qty'] ;
                $orderItems->save();
            }
            $cook = $request->cookie('_ltsi');
            $code = unserialize(base64_decode($cook));
            unset($code['cart']);

            if($request->createAccount)
                return $this->respondWithToken($token,"Registration succesful", null)
                ->cookie('_ltsi',base64_encode(serialize($code)),50000);
            else 
                return response()->json(['message' => 'ok'], 200)
                ->cookie('_ltsi',base64_encode(serialize($code)),50000);
    
            // $userAddr->
        }
        return 'ok';
    }
    public function register($data){
        $validator = Validator::make($data,[
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:8',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            $errs = $validator->errors();
            
            return response()->json([
                'success' => false,
                "log" => "verify your forms",
                'messages' => $errs
            ], 500);
        }

        $dataIn = [
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'activation_token' => Str::random(60),
        ];

        try {
        $user = User::create($dataIn);
        // $user->notify(new SignupActivate($user));
        } catch (\Swift_TransportException $th) {
            $user->delete();
            return response()->json([
                "success" => false,
                "messages" => [],
                "log" =>  "An unknown error occured. Please retry later or contact the site admin."

            ],500);
        }catch (QueryException $th) {
            $user->delete();
            return response()->json([
                "succes" => false,
                'messages' => [],
                "log" =>  "An internal error occured. Please retry later or contact the site admin."
            ],500);
        } 
        
        shoppingSession::create(['user_id' => $user->id]);
        $accessToken = $user->createToken('authToken');
        return [$accessToken,$user->id];



    }

}
