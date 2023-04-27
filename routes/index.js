var express = require('express');
var router = express.Router();
var spotifyController = require('../controllers/SpotifyController')
var gptController = require('../controllers/GPTController')
var stableDiffusionController = require('../controllers/StableDiffusionController')


// this file manages all routes between frontend and backend code
router.get('/login', function(req, res) {
    spotifyController.authenticateAccount(res)
});

router.get('/callback', function(req, res) {
    spotifyController.callback(req, res)
});

router.get('/refresh_token', function(req, res) {
    spotifyController.refreshToken(req, res)
});

router.get('/get_playlists', function(req, res) {
    spotifyController.getPlaylists(req, res)
});

router.get('/get_playlist_tracks', function(req, res) {
    spotifyController.getPlaylistTracks(req, res)
});

router.get('/test', function(req, res) {
    console.log("Connected to node.js backend")
});



module.exports = router;