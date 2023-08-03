import { useState } from "react";
import { getPlaylistImage, getPlaylists } from "../controllers/SpotifyController";
import axios from "axios";

function PlayListViz(spotifyData) {

    
    // const SpotifyCallback = () => {
    //     useEffect(() => {
    //     // Function to extract the access token from the URL fragment
    //     const getAccessToken = () => {
    //         const params = new URLSearchParams(window.location.hash.substr(1));
    //         const accessToken = params.get('access_token');
    //         // Now you have the access token, you can use it to make API calls
    //         console.log('Access Token:', accessToken);
    //     };

    // you can maybe import the getaccess token from /callback, or save it and call it from localstorage.
    
    //     getAccessToken();
    //     }, []);
    // }
    
    // this works
    const prefetchPlaylists = async () => {
        const accessToken = localStorage.getItem('accessToken');
        console.log("found access token in reactbase: " + accessToken);
        return accessToken;
    }

    // this is the bottleneck. something's not right here.
    const fetchPlaylists = async (accessToken) => {
        try {
            // need to login first through index.html page.
            const response = await axios.get("http://localhost:8888/get_playlists", accessToken); 
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error if needed
            return null;
        }
    };

    // prefetchPlaylists().then( (accessToken) => {
    //     fetchPlaylists(accessToken);
    // });

    return ( <div>
        <SpotifAiTitle />
        <SpotifAiTable spotifyData={spotifyData}/>
    </div>        
    );
}

function SpotifAiTitle() {
    return <h1>Spotif.ai</h1>
}

// here we assume we have spotifyData as a list of playlists as per sample, JSON being funky currently.
function SpotifAiTable(spotifyData) {
    const rows = [];

    // temporary solution to getting it as an array.
    let spotifyPlaylists = [];
    spotifyPlaylists.push(spotifyData);
    spotifyPlaylists.push(spotifyData);
    console.log("here we have " + spotifyPlaylists.length);
    for (const playlist of spotifyPlaylists) {
        rows.push(
            <PlaylistRow playlist={playlist}/>
        );
    }

    return (<table className="container">
        <thead>
            
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    );
}

// each row needs a column for name of playlist, playlist image, and a button for Generate.
function PlaylistRow (playlist) {
    return (
        <tr>
            <div>
                playlist name and picture goes here 
                <GenerateButton/>
            </div>
        </tr>
    )
}

// need to add an on-click that calls API chain to generate new playlist image.
function GenerateButton() {
    return (
            <button className={'a'}>
            Generate
            </button>
    )
}

// this will be state in the future?
// this would be the data from spotify api call GetPlaylists.
// let dataFromGetPlaylists = getPlaylists();

// static sample. this is an array of one singular playlist. 
// pretty sure we'll have to tease apart the API some more to turn data into this form.
let dataFromGetPlaylists = {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "collaborative": false,
        "description": "string",
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            "height": 300,
            "width": 300
          }
        ],
        "name": "Sample Playlist",
        "owner": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string",
          "display_name": "string"
        },
        "public": false,
        "snapshot_id": "string",
        "tracks": {
          "href": "string",
          "total": 0
        },
        "type": "string",
        "uri": "string"
      }
    ]
  };

// for each playlist can use getPlaylistImage.
let PlaylistImages = [];

function App() {
    return <PlayListViz spotifyData={dataFromGetPlaylists}/>
}

export default App;