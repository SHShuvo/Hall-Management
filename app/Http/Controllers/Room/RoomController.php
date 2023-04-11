<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\Seat;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index(){
        return Room::with([
            'seats', 
            'seats.student'=>function($q){
                $q->select('id', 'name', 'roll');
            }
        ])->orderBy('room_number')->get();
    }
    public function store(Request $request){
        $validatedData = $request->validate(
            ['room_number' => 'required|unique:rooms', 'number_of_seats' => 'required'],
            ['room_number.unique'=> 'This room is already added']
        );

        $room = Room::create([
            'room_number'=>$request->room_number,
            'number_of_seats'=>$request->number_of_seats
        ]);
        for ($seat=1; $seat <= $request->number_of_seats; $seat++) { 
            Seat::create([
                'seat_number'=>$seat,
                'room_id'=>$room->id
            ]);
        }
        return response(['msg'=>'success'],200);
    }

    public function updateAllocation(Request $request){
        $validatedData = $request->validate(
            [
                'seat_id' => 'required', 
                'student_id' => 'required',
                'allocated_date' => 'required',
            ],
        );
        $seat = Seat::findOrFail($request->seat_id);
        $seat->allocated_user = $request->student_id;
        $seat->allocated_date = $request->allocated_date;
        $seat->save();

        $room = Room::where('id', $seat->room_id)->with('seats')->first();
        return response($room, 200);
    }
}
