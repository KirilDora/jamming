import React, { useState, useEffect } from "react";
import Spotify from "../../utils/Spotify";
import PlaylistListItem from "../PlaylistListItem/PlaylistListItem";
import styles from './PlaylistList.module.css';

const PlaylistList = (props) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(()=>{
    Spotify.getUserPlaylists().then(getPlaylists => {
      setPlaylists(getPlaylists);
    })
  }, []);

  return (
    <div className={styles.LocalPlaylists}>
      <h2>Local Playlists</h2>
      {playlists?.map(playlist => (
        <PlaylistListItem
          key={playlist.id}
          track={playlist}
          id={playlist.id}
          name={playlist.name}
          userId={playlist.userId}
          selectPlaylist={props.selectPlaylist}
          className={styles.PlaylistItem}
        />
      ))}
    </div>
  )
}

export default PlaylistList;