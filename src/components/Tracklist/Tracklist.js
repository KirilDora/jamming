import React from "react";

import styles from "./Tracklist.module.css";

import Track from "../Track/Track";

const TrackList = (props) => {

  return (
    <div className={styles.TrackList}>
      {props.tracks?.map((track)=>{
        return (
          <Track 
            track = {track} 
            key = {track.id} 
            onAdd = {props.onAdd}
            onRemove = {props.onRemove}
            isRemoval={props.isRemoval}
          />
        )
      })}
    </div>
  );
};

export default TrackList;
