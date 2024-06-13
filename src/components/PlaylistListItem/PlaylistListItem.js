import React from "react";

const PlaylistListItem = (props) => {
  const handleClick = (event) => {
    console.log(props.track);
    console.log(props.id);
    props.selectPlaylist(props.track)
  }

  return (
    <h3 onClick={handleClick}>{props.name}</h3>
  )
}

export default PlaylistListItem;