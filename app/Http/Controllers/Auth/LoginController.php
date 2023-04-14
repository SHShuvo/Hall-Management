<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function __construct() {
        // $this->middleware('guest')->except('logout');
    }

	// if (Auth::check()) {
	//   // The user is logged in...
	// }
    
	public function login(Request $request){
		$this->validate($request,[
			'email'    => 'required',
			'password' => 'required'
		]);

		$fieldType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'roll';
		$userdata = array(
			$fieldType => $request['email'], 
			'password' => $request['password']
		);
        if(Auth::attempt($userdata)){
            $user = auth()->user();
		 	return response(['user'=>$user], 200);
        }
		return response(['status'=>'failed'], 401);
	}

	public function logout(){
		Auth::logout();
		return response(['status'=>'logout'], 200);
	}

	public function status(){
		if(Auth::check()){
			return response([],200);
		}
		return response(['status'=>'failed'], 401);
	}

	public function passUpdate(Request $request){
		$this->validate($request, [
			'old_password' => 'required',
			'new_password' => 'required|confirmed|min:4',
			'new_password_confirmation' => 'required',
		]);

		$user=Auth::user();
		if(Hash::check($request->old_password, $user->password)){
			$user->password = $request->new_password;
			$user->save();
			return response()->json(['msg'=>'Password Updated'],200);
		}
		else {
			return response()->json(['error'=>'Old Password does not match'],401);
		}
	}
}





