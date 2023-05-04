<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\Seat;
use App\Models\StudentDetails;
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

        $student_is_allocated = Seat::where('allocated_user', $request->student_id)->first();
        if($student_is_allocated){
            $room = Room::where('id', $student_is_allocated->room_id)->first();
            return response(['room_number'=>$room->room_number], 403);
        }
        $seat = Seat::findOrFail($request->seat_id);
        $seat->allocated_user = $request->student_id;
        $seat->allocated_date = $request->allocated_date;
        $seat->save();

        $student_details = StudentDetails::where('user_id', $request->student_id)->first();
        $student_details->allocated_date = $request->allocated_date;
        $student_details->cancelled_date = null;
        $student_details->save();

        $room = Room::where('id', $seat->room_id)->with([
            'seats', 
            'seats.student'=>function($q){
                $q->select('id', 'name', 'roll');
            }
        ])->first();
        return response($room, 200);
    }
    public function cancelAllocation($seat_id){
        $seat = Seat::findOrFail($seat_id);

        $student_details = StudentDetails::where('user_id', $seat->allocated_user)->first();
        $today = \Carbon\Carbon::today();
        $student_details->cancelled_date = $today;
        $student_details->save();

        $seat->allocated_user = null;
        $seat->allocated_date = null;
        $seat->save();
        $room = Room::where('id', $seat->room_id)->with([
            'seats', 
            'seats.student'=>function($q){
                $q->select('id', 'name', 'roll');
            }
        ])->first();
        return response($room, 200);
    }
}
