import React from 'react';

function Track({ track }) {
  return (
    <div className="track">
      {props.track.name}
      {' - '}
      {props.track.artist}
      <br />
      {props.track.album}
    </div>
  );
}

export default Track;
