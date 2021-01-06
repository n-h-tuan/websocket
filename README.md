## Several tips when using socket.
    1. Create personal channel (make:event)
        1.1. With PUBLIC channel, return the name of channel.
        1.2. With PRIVATE channel, return PrivateChannel('name_of_channel').
    2. Send message to channels.
        2.1. By default, PUBLIC channel will broadcast to everyone, specifically, anyone without login.
        2.2. For PRIVATE channel, user MUST login to access this channel, by default, Laravel uses the default AUTH (Auth without apiToken), to change this to adapt AUTH through API -> go to BroadcastServiceProvider -> add auth:api middleware to Broadcast Route => Broadcast::routes(['middleware' => 'auth:api']).
    3. When a user login, depending on the init of listening channel in Frontend, user will immediately join to channel. To custom some code right after joining channel, you can modify in file "channel.php".
=> More detail: https://laravel.com/docs/7.x/broadcasting
    
    4. To access to PrivateChannel (for API_TOKEN AUTH), you must add header `Authorization` to the Library using to listen broadcast channel.

=> Basically: Creating EVENT, EVENT will be broadcasted on SPECIFIC CHANNEL, depend on property "BroadcastOn" in EVENT file 