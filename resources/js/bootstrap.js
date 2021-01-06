window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) { }

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
let api_token = document.getElementsByTagName('meta').api_token.content;
console.log(api_token);
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');
let Echo1 = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    // cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    auth: {
        headers: {
            Authorization: 'Bearer '.concat(api_token),
        },
    },
});
Echo1.private('private-channel')
    .listen('TestPrivateEvent', (e) => {
        console.log(e.message);
    });

let Echo2 = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});
Echo2.channel('public-channel')
    .listen('TestPublicEvent', (e) => {
        console.log(e.message);
    });

let Echo3 = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    // cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    auth: {
        headers: {
            Authorization: 'Bearer '.concat(api_token),
        },
    },
});
Echo3.private('second-private-channel')
    .listen('SecondPrivateEvent', (e) => {
        console.log(e.message);
    });