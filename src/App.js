import React, { useState } from 'react';

import './App.css';

import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './utils/Spotify';
import PlaylistList from './components/PlaylistList/PlaylistList';

const initSearchedTracks = [
  {
    name: "Balaclava",
    artist: "Big baby tape",
    album: "Facts and Arguments",
    id:1,
  },
  {
    name: "Wigga",
    artist: "Big baby tape",
    album: "Dragoborn",
    id:2,
  },
  {
    name: "Money long",
    artist: "Kizaru",
    album: "Some Album",
    id:3,
  },
  {
    name: "Hadouken",
    artist: "Big baby tape",
    album: "Dragoborn",
    id:4,
  },
  {
    name: "M6",
    artist: "Big baby tape",
    album: "M6",
    id:5,
  },
];
const initNewPlaylist = [
  {
    name:"newPlaylist",
    tracks: [
      {
        name: "Balaclava",
        artist: "Big baby tape",
        album: "Facts and Arguments",
        id:1,
      },
      {
        name: "Wigga",
        artist: "Big baby tape",
        album: "Dragoborn",
        id:2,
      },
      {
        name: "Money long",
        artist: "Kizaru",
        album: "Some Album",
        id:3,
      }
    ]
  }
]

function App() {
  const [searchedTrakcs, setSearchedTracks] = useState([]);
  
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = item => {
    if(playlistTracks.some(track => track.id === item.id))
      return;
    setPlaylistTracks(prev => [...prev, item]);
  }

  const removeTrack = item => {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== item.id));
  }

  const changeName = item => {
    setPlaylistName(item.value);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  const searchTracks = term => {
    Spotify.search(term).then(setSearchedTracks);
  }

  const selectPlaylist = (userId, playlistId, name) => {
    Spotify.getPlaylist(userId, playlistId).then(tracks => {
      console.log(tracks);
      setPlaylistName(`Playlist ${playlistId}`); // Вы можете изменить это, чтобы получить фактическое название плейлиста
      setPlaylistTracks(tracks);
    });
  };

  return (
    <div className="App">
      <header className='App__header'>
        <h1>Ja<span className='violet'>mmm</span>ing</h1>
      </header>

      <SearchBar onSearch={searchTracks}/>

      <div className="Playlists">
        <SearchResults 
          tracks={searchedTrakcs} 
          onAdd={addTrack} 
        />
        <Playlist 
          name={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          onChange={changeName}
          onSave={savePlaylist}
        />
      </div>
      <div>
        <PlaylistList selectPlaylist={selectPlaylist}/>
      </div>
    </div>
  );
}

export default App;
