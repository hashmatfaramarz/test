<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Students;

class Student extends Controller
{
    function add() {
        $createdStudent = Students::where('id',2)->get();
        return response()->json($createdStudent);
    }
}
