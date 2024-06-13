import React from 'react';
import styles from './Track.module.css';
import { MdAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Track = (props) => {

  const addTrack = (event) => {
    props.onAdd(props.track);
  }

  const removeTrack = (event) => {
    props.onRemove(props.track)
  }

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <MdDeleteOutline onClick={removeTrack}/>
      );
    }
    return (
      <MdAdd onClick={addTrack}/>
    );
  };

  return (
    <div className={styles.Track}>
      <div className={styles["Track-information"]}>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <div>
        {renderAction()}
      </div>
    </div>
  );
}

export default Track;