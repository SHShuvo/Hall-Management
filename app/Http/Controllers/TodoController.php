<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index(){
        $data = TodoList::orderBy('id')->get();
        return response($data, 200);
    }
    public function store(Request $request){
        $validatedData = $request->validate(
            ['description' => 'required|unique:todo_lists|max:255'],
            ['description.unique'=> 'Description can not be duplicated']
        );

        $newTodo = TodoList::create([
            'description'=>$request->description,
        ]);
        return response($newTodo, 201);
    }
    public function destroy($id){
        TodoList::find($id)->delete();
    }
}
