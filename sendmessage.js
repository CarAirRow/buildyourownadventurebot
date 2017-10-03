var accountSid = 'ACc0d6f53e10172dcf5910ee5ca795cf51'; // Your Account SID from www.twilio.com/console
var authToken = '9a158610c68fe25258ed661a2145bc7c';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node #2',
    to: '+12267551471',  // Text this number
    from: '+12264002164 ' // From a valid Twilio number
})
.then((message) => console.log(message));