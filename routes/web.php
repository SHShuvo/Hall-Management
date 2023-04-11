<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Room\RoomController;
use App\Http\Controllers\Student\StudentController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});
Route::post('/login', [LoginController::class, 'login']);
Route::get('/user-status/check', [LoginController::class, 'status'])->middleware('auth');
Route::get('/logout', [LoginController::class, 'logout']);

//students
Route::post('/register-student', [StudentController::class, 'registerStudent']);
Route::get('/students', [StudentController::class, 'allStudents']);
Route::get('/students-room-allocation', [StudentController::class, 'studentAllocation']);

//admins
Route::post('/register-admin', [AdminController::class, 'registerAdmin']);
Route::get('/admins', [AdminController::class, 'allAdmins']);

//room
Route::post('/register-room', [RoomController::class, 'store']);
Route::get('/get-rooms', [RoomController::class, 'index']);
Route::post('/update-allocation', [RoomController::class, 'updateAllocation']);

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');