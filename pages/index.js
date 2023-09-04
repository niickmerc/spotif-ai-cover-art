import React from "react";
import axios from "axios";
import SpotifyCallback from './callback';

var client_id = '9aadd7202b3d4cf99860814dda2d5e85';
var client_secret = 'c6a6ddfdac774ec4adffa2298ca46055'; 
const redirect_uri = 'http://localhost:3000/callback'; // Your redirect URI, make sure it matches the one registered with Spotify
const scope = 'user-read-private user-read-email playlist-read-private'; // Requested permissions


var stateKey = 'spotify_auth_state';


export default function Login() {

    const authenticateAccount = async () => {
        const state = generateRandomString(16);
        localStorage.setItem(stateKey,state);

        const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${state}`;
        window.location.href = url;
        // with implicit grant flow, we get the token straight up. skips a few steps

        // this step then gets you back to callback URL with the auth code in the URL
        // You'll need to implement a callback component to handle this redirect and 
        // extract the token from the URL parameters. 
    }

    

    const handleTestAPI = () => async () => {
        try {
            const response = await axios.get("http://localhost:8888/get_playlists");
            console.log(response.data);
        } catch (error) {
            console.error("Error getting playlists");
        }
    }

    const generateRandomString = (length) => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    return (
        <div>
            <h1>Spotif.ai <br></br></h1>
            <h2> Generate images for your favourite playlists using AI</h2>
        <div className="container">
            <button onClick={authenticateAccount} className={'a'}>
            Login with Spotify
            </button>
        </div>
        </div>
    )
}