<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public $timestamps = false;

    public function student(){
        return $this->belongsTo(User::class, 'allocated_user');
    }
}
