<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentDetails extends Model
{
    use HasFactory;
    public $table = 'student_details';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function departmentDetail(){
        return $this->belongsTo(Department::class, 'department', 'code');
    }
}
