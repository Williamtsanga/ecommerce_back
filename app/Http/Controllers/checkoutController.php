<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use DB;
use Str;
use Mongodb\BSON\ObjectID;
use App\Models\order;
use App\Models\orderItem;
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
        
    }
}
