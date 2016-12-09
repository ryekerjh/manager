var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var fs = require('fs');
var redirectUrl = 'localhost:3001/oauth/google';
var oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
);

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/calendar',
  approval_prompt: 'force'

});

oauth2Client.getToken(code, function (err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  if (!err) {
    oauth2Client.setCredentials(tokens);
  }
});

// set auth as a global default
google.options({
  auth: oauth2Client
});