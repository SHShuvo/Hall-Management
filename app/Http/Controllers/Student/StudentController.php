<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\StudentDetails;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    public function allStudents(Request $request){
        return User::where('role_id', 3)->get();
    }

	public function studentAllocation(Request $request){
		return User::where('role_id', 3)->get(['id', 'name', 'roll', DB::raw("CONCAT(name,'-',roll) as name_roll")]);
	}

    public function registerStudent(Request $request){
		$this->validate($request,[
			'roll'    => 'required',
			'email'    => 'required|email|unique:users',
		]);
		$user = User::create([
			'name'    	=> $request->name,
			'roll'    	=> $request->roll,
			'email'    	=> $request->email,
			'role_id'	=> 3,
			'password' 	=> '1234',
		]);
		return response($user, 200);
	}

	public function profileInfo(){
		$user = User::where('id', auth()->user()->id)->with('studentDetails', 'studentDetails.departmentDetail')
		->select('id', 'roll', 'email', 'name')->first();
		return $user;
	}

	public function userUpdate(Request $request){
		$user = User::where('id', auth()->user()->id)->first();
		$user->name = $request->name;
		$user->email = $request->email;
		$user->save();

		$student_detail = StudentDetails::where('user_id', $user->id)->first();
		$student_detail->department	= $request->department;
		$student_detail->session	= $request->session;
		$student_detail->save();
		return response(200);
	}
}
