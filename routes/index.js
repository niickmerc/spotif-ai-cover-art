var express = require('express');
var router = express.Router();
var spotifyController = require('../controllers/SpotifyController')

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

module.exports = router;