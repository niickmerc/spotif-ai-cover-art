import React from "react";
import axios from "axios";


var client_id = '48707ed8c4ea4fc380bb8cbc121d1542';
var client_secret = 'c5a64a68589c4da4846dca63d6c8f8f7'; 
const redirect_uri = 'http://localhost:3000/reactbase'; // Your redirect URI, make sure it matches the one registered with Spotify
const scope = 'user-read-private user-read-email playlist-read-private'; // Requested permissions

var stateKey = 'spotify_auth_state';


export default function Login() {

    // to authenticate account.
    const authenticateAccount = async () => {
        const state = generateRandomString(16);
        localStorage.setItem(stateKey,state);
        const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${state}`;
        // const url = ('https://accounts.spotify.com/authorize?' +
        //                 querystring.stringify({
        //                 response_type: 'code',
        //                 client_id: client_id,
        //                 scope: scope,
        //                 redirect_uri: redirect_uri,
        //                 state: state
        //                 }));
        window.location.href = url;
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
            <button onClick={authenticateAccount}>
            Login with Spotify
            </button>
            <button onClick={handleTestAPI}>
            Execute Test API Call
            </button>
        </div>
    )
}