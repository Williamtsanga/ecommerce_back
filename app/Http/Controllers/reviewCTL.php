<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\review;
use Carbon\Carbon;

class reviewCTL extends Controller
{
    // DATE_FORMAT(r.created_at,'%M %c,%Y')
    public function add(Request $request)
    {
        $user = $request->user();
        $add = new review;
        if($user){
            $add->rate = $request->rate;
            $add->message = $request->message;
            $add->email = $user->email;
            $add->name = $user->first_name.' '.$user->last_name;
            $add->product_id = $request->product_id;
            $add->user_id = $user->id;
            
        }
        else{
            $add->rate = $request->rate;
            $add->message = $request->message;
            $add->email = $request->email;
            $add->name = $request->name;
            $add->product_id = $request->product_id;
        }
        $add->save();
        $rate = review::where('product_id',$request->product_id)->avg('rate');
        $add['date'] = Carbon::parse($add->created_at)->format('M d,Y');
        return response()->json([
            'new' => $add,
            'rate' => $rate
        ], 201);

    }
}
