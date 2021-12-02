<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\shoppingSessino;
use Validator;
use Hash;
use Str;
use Auth;

class userController extends Controller
{
    protected $user;

    public function __construct()
    {
        // $this->middleware("auth:api",["except" => ["login" , "register"]]);
        $this->middleware("guest")->except("logout","viewProfile" , "Update","signupActivate");

        $this->user = new User;
    }
    public function Update(Request $request)
    {
                        $date = $request->user();

            if($request->type == "password"){
                $pass = $this->user::find($date->id);

                if(!Hash::check($request->currPwd , $pass->password)){
                    return response()->json([
                        'success' => false,
                        'message' => "The given password does not match the current password..",
                        "HUM" => Hash::check($request->currPwd , $pass->password)
                    ], 500);
                }
                $date->update(['password' => Hash::make($request->password)]);

                                $date->tokens()->each(function ($token , $key) {
                    $token->revoke();
                } );

                    return "ok" ;
            }
            else {
                $date->update([$request->type => $request->input($request->type)]);
                return "ok";
            }
    }
    

     public function register( Request $request){
        $validator = Validator::make($request->all(),[
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:8',
            'c_password' => 'required|same:password',
        ]);

        // for ($i=0; $i < $validator->errors()->count(); $i++) { 
        //     echo($validator->errors())
        // }
        // echo($validator->errors()->count());

        if($validator->fails()){
            $errs = $validator->errors();
            
            return response()->json([
                'success' => false,
                "log" => "verify your forms",
                'messages' => $errs
            ], 500);
        }

        $data = [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'activation_token' => Str::random(60),
        ];
        // dd($request->input());
        try {
        $user = $this->user->create($data);
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
        
        $responseMessage = "Registration succesful";
        shoppingSession::create(['user_id' => $user->id]);
        $accessToken = $user->createToken('authToken');
        // $responseMessage = 'Login successful';
        return $this->respondWithToken($accessToken,$responseMessage, $user);



    }
    
    public function logout(Request $request)
    {
        // $user = Auth::guard("api")->user()->token();
        $request->user()->token()->revoke();

        // $user = auth()->user()->tokens()->each(function ($token , $key) {
        //     $token->revoke();
        // } );
        // Auth::guard('web')->logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        // \Session::flush();
        // return redirect('/login');
        // Auth::logout();
        // $user->revoke();
        // $user->logoutOtherDevices();
        // return $user;
        $responseMessage = "Successfully logged out";
        return $this->deleteCookie($responseMessage);

    }


    public function signupActivate($token){
        $user = User::where("activation_token" , $token)->first();
        if(!$user){
            return response()->json([
                'message' => 'this user is invalid',
            ],404);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->save();
    }


    public function viewProfile(Request $request){
        $responseMessage = "user profile";
        $validator = Validator::make($request->user()->toarray(), [
			'role' => 'in:admin,seller',
		]);
		if ($validator->fails()) {
			
			return response()->json($validator->errors(), 417);
		}
        
        return response()->json([
            'success' => true,
            'message' => $responseMessage,
            'user' => $request->user()
            
        ], 200);

    }   
    

    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|string',
            'password' => 'required|min:8',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first()
            ], 500);
        }

        $credentials = $request->only(["email","password"]);

        $user = User::where('email' , $credentials['email'])->first();
        if($user){
            if(!auth()->attempt($credentials )){
                $responseMessage = 'Invalid username or passord';
                return response()->json([
                    'success' => false,
                    'message' => $responseMessage,
                    'error' => $responseMessage
                ], 422);
    
            }
            // $request->session()->regenerate();

            $accessToken = auth()->user()->createToken('authToken');

            // return $this->respondWithToken($accessToken,$responseMessage, auth()->user());
            return $this->respondWithToken($accessToken,'authenticated',$user);
        }else {
            return response()->json([
                'success' => false,
                'message' => "Sorry this user does not exist",
            ], 422);

        }


    }

    public function updatePofile(Type $var = null)
    {
        return Str::random(10);
    }


    public function adminLogin(Request $request)
	{
		$input = $request->all();
		$validator = Validator::make($input, [
			'email' => 'required|email',
			'password' => 'required',
		]);
		if ($validator->fails()) {
			
			return response()->json(['error' =>  $validator->errors(),'message' => 'input errors'], 417);
		}
		$credentials = $request->only(['email', 'password']);
		if (Auth::attempt($credentials)) {
			if(Auth::user()->role == 'basic'){
                return response()->json(['message' => 'Sorry your account type is not permitted, contact the administrator' ], 401);
            }
			$user = Auth::user();
			$success = $user->createToken('MyApp', [$user->role]);
            return $this->respondWithToken($success,'authenticated',$user);
			// return response()->json(['success' => $success], 200);
		}
		else {
			return response()->json(['message' => 'email or password invalid'], 401);
		}
	}
	/**
	 * admin register API
	 * @return \Illuminate\Http\Response
	 */
	public function adminRegister(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'first_name' => 'required',
			'last_name' => 'required',
			'email' => 'required|email',
            'role' => 'in:admin,seller',
			'password' => 'required',
			'c_password' => 'required|same:password',
		]);
		if ($validator->fails()) {
			
			return response()->json($validator->errors(), 417);
		}
		$user = User::create([
			'first_name' => $request->first_name,
			'last_name' => $request->last_name,
			'email' => $request->email,
            'activation_token' => Str::random(60),
            'role' => $request->role,
			'password' => Hash::make($request->password),
		]);
		$success['name'] = $user->first_name.' '.$user->last_name;
        shoppingSession::create(['user_id' => $user->id]);

		$success['token'] = $user->createToken('MyApp', [$request->role])->accessToken;
		return response()->json(['success' => $success], 200);
	}
}
