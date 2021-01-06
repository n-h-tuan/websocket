<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('private-channel', function ($user) {
    Log::debug('private-channel-1', ['user' => $user]);
    return $user->id == 1;
});
Broadcast::channel('second-private-channel', function ($user) {
    Log::debug('private-channel-2', ['user' => $user]);
    return $user->id == 2;
});
