import { useState } from "react";

function PlayListViz(spotifyData) {
    return ( <div>
        <SpotifAiTitle />
        <SpotifAiTable />
    </div>        
    );
}

function SpotifAiTitle() {
    return <h1>Spotif.ai</h1>
}

function SpotifAiTable() {
    return (<div>

    </div>
    );
}

// this would be the data from spotify api call GetPlaylists.
let dataFromGetPlaylists;

// for each playlist need to use getPlaylistImage.
let PlaylistImages = [];

export default function App() {
    return <PlayListViz spotifyData={dataFromGetPlaylists}/>
}