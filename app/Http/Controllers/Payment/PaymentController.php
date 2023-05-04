<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(){
        $payements = Payment::with(['user'=>function($q){
            $q->select('id', 'name', 'roll');
        }])->latest()->take(30)->get(['id', 'date', 'amount', 'user_id']);
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
}
