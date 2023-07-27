import { useState } from "react";

function PlayListViz(spotifyData) {
    return ( <div>
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

// this would be the data from spotify api call GetPlaylists.
let dataFromGetPlaylists;

// for each playlist need to use getPlaylistImage.
let PlaylistImages = [];

export default function App() {
    return <PlayListViz spotifyData={dataFromGetPlaylists}/>
}