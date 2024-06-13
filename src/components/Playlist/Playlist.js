import React from "react";

import styles from "./Playlist.module.css";

import TrackList from "../Tracklist/Tracklist";

const Playlist = (props) => {

  const changeTitle = (event) => {
    props.onChange(event.target);
  }

  return (
    <div className={styles.Playlist}>
      <input value={props.name} onChange={changeTitle} type="text" />
      <TrackList 
        tracks={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className={styles["Playlist-save"]} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
