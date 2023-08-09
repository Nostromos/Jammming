// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';
import TrackList from '../TrackList/TrackList';

// eslint-disable-next-line react/prop-types
function Playlist({ onNameChange, playlistTracks, onRemove }) {
  const handleNameChange = useCallback((event) => {
    onNameChange(event.target.value);
  }, [onNameChange]);

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} />
      <TrackList
        tracks={playlistTracks}
        isRemoval="true"
        onRemove={onRemove}
      />
    </div>
  );
}

export default Playlist;
