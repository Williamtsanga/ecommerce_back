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

    public function deleteCookie($message)
    {
        return response()->json(['message' => $message], 200)
        ->withCookie(cookie()->forget('_token'));
    }

    public function respondWithToken($token, $responseMessage,$data){


    // 'name' => '_token',
    // 'value' => $token,
    // 'minutes' => 1440,
    // 'path' => null,
    // 'domain' => null,
    // // 'secure' => true, // for production
    // 'secure' => null, // for localhost
    // 'httponly' => true,
    // 'samesite' => true,
    return response()->json([
            // "expires_at" => $token->token->expires_at
            "expires_at" => Carbon::parse($token->token->expires_at)->toDateTimeString(),
            'user' => $data,
            'message' => $responseMessage
        ], 200)
        ->cookie('_token',$token->accessToken,Carbon::parse($token->token->expires_at)->diffInMinutes(Carbon::now()),null,null,null,true,true);


}
}
