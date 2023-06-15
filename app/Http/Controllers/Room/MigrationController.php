<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\Seat;
use App\Models\StudentMigration;
use App\Models\User;
use Illuminate\Http\Request;

class MigrationController extends Controller
{
    public function migration(Request $request){
        StudentMigration::create([
            'student_id'=>$request->student_id['id'],
            'previous_seat_id'=> $request->student_id['seat']['id'],
            'new_seat_id'=> $request->seat['id'],
            'date'=>$request->date
        ]);
        $pre_seat = Seat::findOrFail($request->student_id['seat']['id']);
        $new_seat = Seat::findOrFail($request->seat['id']);
        $pre_seat->allocated_user = null;
        $pre_seat->allocated_date = null;
        $pre_seat->save();

        $new_seat->allocated_user = $request->student_id['id'];
        $new_seat->allocated_date = $request->date;
        $new_seat->save();
        return response(200);
    }
    public function sudentDetails(){
        $user = User::where('id', auth()->user()->id)->with('seat','seat.room', 'studentDetails')
		->select('id', 'roll', 'name', 'phone')->first();
		return $user;
    }

    public function availableRooms(){
        $available_seats = Seat::whereNull('allocated_user')->groupBy('room_id')->pluck('room_id')->toArray();
        $available_rooms = Room::whereIn('id', $available_seats)
        ->with(['seats'=>function($q){
            $q->whereNull('allocated_user')->select('id', 'seat_number', 'room_id');
        }])->get(['id', 'room_number']);
        return $available_rooms;
    }
}
