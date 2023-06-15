<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(Request $request){
        $request->validate([
            'from_date' => 'required',
            'to_date' => 'required',
        ]);

        $payements = Payment::whereBetween('date', [$request->from_date, $request->to_date])
        ->with(['user'=>function($q){
            $q->select('id', 'name', 'roll');
        }])->get(['id', 'date', 'amount', 'user_id']);
        return response($payements, 200);
    }
    public function paymentStudentWise(){
        $payements = Payment::where('user_id', auth()->user()->id)->with(['user'=>function($q){
            $q->select('id', 'name', 'roll');
        }])->get(['id', 'date', 'amount', 'user_id']);
        return response($payements, 200);
    }
    public function store(Request $request){
        $request->validate([
            'student_id' => 'required',
            'amount' => 'required', 
            'date' => 'required |date', 
        ]);

        $new = Payment::create([
            'user_id'=>$request->student_id,
            'amount'=>$request->amount,
            'date'=>$request->date,
        ]);
        return response($new, 201);
    }

    public function paymentDateWise(Request $request){
        $request->validate([
            'from_date' => 'required',
            'to_date' => 'required',
        ]);
        $total = Payment::whereBetween('date', [$request->from_date, $request->to_date])->sum('amount');
        return response($total, 200);
    }
}
