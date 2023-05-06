<?php

namespace App\Http\Controllers\Certificate;

use App\Http\Controllers\Controller;
use App\Models\User;
use PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Certificatecontroller extends Controller
{
    public function generatePDF(Request $request){
        $today = \Carbon\Carbon::today();
        $student = User::where('id', auth()->user()->id)
        ->with([
			'studentDetails'=>function($q) use($today){
				$q->select('user_id','department', 'session', 'allocated_date', 'cancelled_date', 
				DB::raw("DATEDIFF(IF(cancelled_date IS NULL , '$today', cancelled_date), allocated_date)*8.21 AS charge"));
			}, 
			'studentDetails.departmentDetail'
		])
		->withSum('payments', 'amount')
		->first();
        // return $student;

        $data = [
            'student' => $student,
            'date' => date('m/d/Y')
        ];
          
        $pdf = PDF::loadView('myPDF', $data);
        return $pdf->stream('Certificate.pdf');
        // return $pdf->download('itsolutionstuff.pdf');
    }
}
