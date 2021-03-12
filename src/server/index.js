const app = require('./server.js')

// designates what port the app server will listen to for incoming requests
app.listen(8081, startupMessage);
function startupMessage() {
    console.log('App is listening on port 8081!');
};