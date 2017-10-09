<?php

use Illuminate\Http\Request;
use App\Students;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$employees = [
    [
      "id"=> 10,
      "firstName"=> "Mustafa",
      "lastName"=> "Wahrez",
      "birthDate"=> "1991-03-31",
      "position"=> "Software development assistant",
      "department"=> [
          "id"=> 10,
          "name"=> "PMIS"
      ]
    ],
    [
      "id"=> 13,
      "firstName"=> "Waris",
      "lastName"=> "Zamani",
      "birthDate"=> "1991-03-31",
      "position"=> "Software development assistant",
      "department"=> [
          "id"=> 10,
          "name"=> "PMIS"
      ]
    ], [
      "id"=> 40,
      "firstName"=> "Walid",
      "lastName"=> "Waziri",
      "birthDate"=> "1991-03-31",
      "position"=> "Software development assistant",
      "department"=> [
          "id"=> 10,
          "name"=> "PMIS"
      ]
    ],
    [
      "id"=> 100,
      "firstName"=> "Hashmatullah",
      "lastName"=> "Faramarz",
      "birthDate"=> "1991-03-31",
      "position"=> "Software development assistant",
      "department"=> [
        "id"=> 1,
        "name"=> "SD"
      ]
    ]
];

Route::get('/employees', function (Request $request) use($employees){
    return response()->json($employees);
});

Route::get('/students',function (){
    $createdStudent = Students::all();
   return response()->json($createdStudent);
});
Route::post('/students',function (Request $request){
    $createdStudent = Students::create($request->all());
    return response()->json($createdStudent);
});
