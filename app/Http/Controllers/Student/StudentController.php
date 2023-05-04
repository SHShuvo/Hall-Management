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
        $today = \Carbon\Carbon::today();
        return User::where('role_id', 3)
		->with([
			'studentDetails'=>function($q) use($today){
				$q->select('user_id','department', 'session', 'allocated_date', 'cancelled_date', 
				DB::raw("DATEDIFF(IF(cancelled_date IS NULL , '$today', cancelled_date), allocated_date)*8.21 AS charge"));
			}, 
			'studentDetails.departmentDetail'
		])
		->withSum('payments', 'amount')
		->get(['id', 'name', 'roll', 'email', 'phone']);
    }

	public function studentAllocation(Request $request){
		return User::where('role_id', 3)->get(['id', 'name', 'roll', DB::raw("CONCAT(name,'-',roll) as name_roll")]);
	}

    public function registerStudent(Request $request){
		$this->validate($request,[
			'name'    	=> 'required',
			'roll'    	=> 'required',
			'session' 	=> 'required',
			'department'=> 'required',
			'phone'		=> 'required',
			'email'   	=> 'email|nullable|unique:users',
			'password' 	=> 'required',
		]);
		$user = User::create([
			'name'    	=> $request->name,
			'roll'    	=> $request->roll,
			'email'    	=> $request->email,
			'phone'		=> $request->phone,
			'role_id'	=> 3,
			'password' 	=> $request->password,
		]);

		StudentDetails::create([
			'user_id'=>$user->id,
			'session'=> $request->session,
			'department'=>$request->department,
		]);
		return response($user, 200);
	}

	public function profileInfo(){
		$user = User::where('id', auth()->user()->id)->with('studentDetails', 'studentDetails.departmentDetail')
		->select('id', 'roll', 'email', 'name', 'phone')->first();
		return $user;
	}

	public function userUpdate(Request $request){
		$user = User::where('id', auth()->user()->id)->first();
		$user->name = $request->name;
		$user->email = $request->email;
		$user->phone = $request->phone;
		$user->save();

		$student_detail = StudentDetails::where('user_id', $user->id)->first();
		$student_detail->department	= $request->department;
		$student_detail->session	= $request->session;
		$student_detail->save();
		return response(200);
	}
}
