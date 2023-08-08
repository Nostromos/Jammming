/* eslint-disable react/prop-types */
import React from 'react';

function Track({ track }) {
  return (
    <div className="track">
      {track.name}
      {' - '}
      {track.artist}
      <br />
      {track.album}
    </div>
  );
}

export default Track;
