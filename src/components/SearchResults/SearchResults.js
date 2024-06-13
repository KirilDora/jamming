import React from "react";
import TrackList from "../Tracklist/Tracklist";
import styles from './SearchResults.module.css';

const SearchResults = (props) => {
  return(
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList 
        tracks={props.tracks} 
        onAdd={props.onAdd}
      />
    </div>
  )
}

export default SearchResults;