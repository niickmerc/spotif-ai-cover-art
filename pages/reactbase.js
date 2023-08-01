import { useState } from "react";
import { getPlaylistImage, getPlaylists } from "../controllers/SpotifyController";
import axios from "axios";

function PlayListViz(spotifyData) {

    
    const SpotifyCallback = () => {
        useEffect(() => {
        // Function to extract the access token from the URL fragment
        const getAccessToken = () => {
            const params = new URLSearchParams(window.location.hash.substr(1));
            const accessToken = params.get('access_token');
            // Now you have the access token, you can use it to make API calls
            console.log('Access Token:', accessToken);
        };
    
        getAccessToken();
        }, []);
    }

    const fetchPlaylists = async () => {
        try {
            // need to login first through index.html page.
            const response = await axios.get("http://localhost:8888/get_playlists"); 
            // works but invalid access token currently when API called. 
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error if needed
            return null;
        }
    };

    return ( <div>

        {fetchPlaylists()}
        <SpotifAiTitle />
        <SpotifAiTable spotifyData={spotifyData} />
    </div>        
    );
}

function SpotifAiTitle() {
    return <h1>Spotif.ai</h1>
}

function SpotifAiTable(spotifyData) {
    const rows = [];
    // TODO: get spotifyData and add it onto rows per playlist. probably need to pass in spotifyImages too.
    //       if we want to show images on main page.

    return (<table>
        <thead>
            <tr>
                <th> 

                </th>
                <th>
                    Name
                </th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    );
}

// this will be state in the future?
// this would be the data from spotify api call GetPlaylists.
let dataFromGetPlaylists = getPlaylists();

// for each playlist need to use getPlaylistImage.
let PlaylistImages = [];

function App() {
    return <PlayListViz spotifyData={dataFromGetPlaylists}/>
}

export default App;