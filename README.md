# Spotif(ai) Playlist Cover Art

Using Spotify, ChatGPT, and Stable Diffusion to create custom cover art for your Spotify playlists

## User Stories

Images for the playlist + names of playlist → make them clickable (Andrew)

Get tracks after user clicks on specified playlist (Andrew)

Get prompt with tracks - name + artist (Nick)

Send prompt to chatGPT → get description (Anmol)

Description sent to stableDiffusion → return image


collaborative playlists that ARE NOT OWNED by the user cannot be read by Web API (ie. Andrew owns the collaborative playlist, while Anmol and Nick are collaborators, then this playlist CANNOT be accessed by both Anmol and Nick) 

### **Set of playlists that can be accessed by user**
- owned and followed non-collaborative public playlists
- owned and followed non-collaborative private playlists when scope *playlist-read-private* has been set
- owned and followed collaborative playlists when scope *playlist-read-collaborative* has been set

