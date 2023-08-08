/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';

import Track from '../Track/Track';

console.log(typeof sampleTracks);

function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
