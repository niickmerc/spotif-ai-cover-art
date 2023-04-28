var querystring = require('querystring');
var request = require('request'); 
var access_token;  // not sure that this is the right path forward. there should be a better way than storing a global var/

var client_id = '48707ed8c4ea4fc380bb8cbc121d1542';
var client_secret = 'c5a64a68589c4da4846dca63d6c8f8f7'; 
var redirect_uri = 'http://localhost:8888/callback'; 

var stateKey = 'spotify_auth_state';

// Generates a random string containing numbers and letters
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// Redirects initial requests to spotify's auth service for authorization
module.exports.authenticateAccount = function(res) {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    var scope = 'user-read-private user-read-email playlist-read-private';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
        }));
};

// Exchanges authorization code for access & refresh tokens
module.exports.callback = function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

            access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',  // we could augment this call to return list of playlists during callback
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
};

// Refreshes access token
module.exports.refreshToken = function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
};

// Retrieves all playlist for the currently authenticated user
module.exports.getPlaylists = function(req, res) {

  var options = {
    url: 'https://api.spotify.com/v1/me/playlists',
    headers: { 'Authorization': 'Bearer ' + access_token },
    json: true
  };
  request.get(options, function(error, response, body) {
    res.send({'playlists': body})
  });
};

module.exports.getPlaylistTracks = function(req, res) {

  var options = {
    url: 'https://api.spotify.com/v1/playlists/5kddin3pzSrHEumoBjV9OV/tracks',
    headers: { 'Authorization': 'Bearer ' + access_token },
    json: true
  };
  request.get(options, function(error, response, body) {
    retArray = []
    tracks = body["items"]

    for(let i = 0; i < tracks.length; i++) {
      trackName = tracks[i]["track"]["name"]
      artists = getArtists(tracks[i]["track"]["artists"])
      retArray.push(trackName + " - " + artists)
    }

    console.log(retArray)

  });

  function getArtists(artistList) {
    artists = artistList[0]["name"]

    for(let i = 1; i < artistList.length; i++) {
      artists += ", " + artistList[i]["name"]
    }

    return artists
  }
}


