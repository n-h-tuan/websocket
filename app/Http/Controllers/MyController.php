<?php

namespace App\Http\Controllers;

use App\Events\TestPrivateEvent;
use App\Events\TestPublicEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MyController extends Controller
{
    public function getMessage(Request $request){
        $length = 10;
        $message = substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
        $publicMessage = "This is public";
        broadcast(new TestPublicEvent($publicMessage));
        Log::debug('Before broadcast private channel');
        broadcast(new TestPrivateEvent($message));
        Log::debug('After broadcast private channel');
        return "broadcasted both public and private channels!";
    }
}
