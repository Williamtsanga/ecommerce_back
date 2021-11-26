<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Carbon\Carbon;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function respondWithToken($token, $responseMessage, $data , $redirect = false)
    {


    // 'name' => '_token',
    // 'value' => $token,
    // 'minutes' => 1440,
    // 'path' => null,
    // 'domain' => null,
    // // 'secure' => true, // for production
    // 'secure' => null, // for localhost
    // 'httponly' => true,
    // 'samesite' => true,

    
    if(!$redirect){

        return Response([
            // "expires_at" => $token->token->expires_at
            "expires_at" => Carbon::parse($token->token->expires_at)->toDateTimeString()
        ])->withCookie(cookie('_token',$token->accessToken,Carbon::parse($token->token->expires_at)->diffInMinutes(Carbon::now()),null,null,null,true,true));

        }
    else{
        // dd($redirect);
        // ->withCookie(cookie('user-info',$token->accessToken,Carbon::parse($token->token->expires_at)->diffInMinutes(Carbon::now())))
        return redirect("/shop/product/lolo-beurr?cat=spacies")->cookie('user-info',$token->accessToken,Carbon::parse($token->token->expires_at)->diffInMinutes(Carbon::now()));
    }

    //                 ->withCookie(cookie('logged' , "1" , 60*24 , null , null , false, false))
    //                 ->withCookie(cookie('user-info',$token->accessToken , 60*24));
    }
}
