<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index(Request $request){
        return Department::all();
    }
    public function store(Request $request){
        $request->validate(
            [
                'code' => 'required | unique:departments',
                'name' => 'required | unique:departments', 
            ],
        );
        $dept = Department::create([
            'code' => $request->code,
            'name' => $request->name, 
        ]);
        return response(['dept'=>$dept], 200);
    }
}
