/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import Track from '../Track/Track';

console.log(typeof sampleTracks);

function TrackList({ tracks }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
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
