/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import Track from '../Track/Track';
import './TrackList.css';

function TrackList({
  tracks, onAdd, isRemoval, onRemove,
}) {
  if (!tracks) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
