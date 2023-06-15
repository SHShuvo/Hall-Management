<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Certificate\Certificatecontroller;
use App\Http\Controllers\Department\DepartmentController;
use App\Http\Controllers\Payment\PaymentController;
use App\Http\Controllers\Room\MigrationController;
use App\Http\Controllers\Room\RoomController;
use App\Http\Controllers\Student\StudentController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});
Route::post('/login', [LoginController::class, 'login']);
Route::get('/user-status/check', [LoginController::class, 'status'])->middleware('auth');
Route::get('/logout', [LoginController::class, 'logout']);
Route::post('/password-update', [LoginController::class, 'passUpdate']);

//students
Route::post('/register-student', [StudentController::class, 'registerStudent']);
Route::get('/students', [StudentController::class, 'allStudents']);
Route::get('/students-room-allocation', [StudentController::class, 'studentAllocation']);
Route::get('/profile-info', [StudentController::class, 'profileInfo']);
Route::post('/student-update', [StudentController::class, 'userUpdate']);
Route::get('/charge-info', [StudentController::class, 'studentChargeInfo']);

//admins
Route::post('/register-admin', [AdminController::class, 'registerAdmin']);
Route::get('/admins', [AdminController::class, 'allAdmins']);

//room
Route::post('/register-room', [RoomController::class, 'store']);
Route::get('/get-rooms', [RoomController::class, 'index']);

//seat
Route::post('/update-allocation', [RoomController::class, 'updateAllocation']);
Route::get('/cancel-seat/{seat_id}', [RoomController::class, 'cancelAllocation']);
Route::get('/get-seat-info', [RoomController::class, 'seatInfo']);

//Department
Route::post('/store-department', [DepartmentController::class, 'store']);
Route::get('/all-department', [DepartmentController::class, 'index']);

//Payment
Route::post('/payment', [PaymentController::class, 'store']);
Route::get('/get-payments', [PaymentController::class, 'index']);
Route::get('/get-payments-studentwise', [PaymentController::class, 'paymentStudentWise']);
Route::get('/get-payment-info', [PaymentController::class, 'paymentDateWise']);

//Certificate
Route::get('/generate-pdf', [Certificatecontroller::class, 'generatePDF']);

//migration
Route::get('/migration-info', [MigrationController::class, 'sudentDetails']);
Route::get('/available-rooms-migration', [MigrationController::class, 'availableRooms']);
Route::post('/submit-migration', [MigrationController::class, 'migration']);

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');