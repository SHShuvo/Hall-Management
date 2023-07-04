<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function allAdmins(Request $request){
        return User::where('role_id', 2)->get();
    }
    public function registerAdmin(Request $request){
		$this->validate($request,[
			'email'    => 'required|email|unique:users',
			'phone'    => 'required',
			'password' => 'required',
		]);
		$user = User::create([
			'name'    	=> $request->name,
			'email'    	=> $request->email,
			'phone'    	=> $request->phone,
			'role_id'	=> 2,
			'password' 	=> $request->password,
		]);
		return response($user, 200);
	}
}
