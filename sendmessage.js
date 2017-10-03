var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node #2',
    to: '+12267551471',  // Text this number
    from: '+12264002164 ' // From a valid Twilio number
})
.then((message) => console.log(message));
