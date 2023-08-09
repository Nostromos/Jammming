/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';

function Track({
  track, onAdd, onRemove, isRemoval,
}) {
  // eslint-disable-next-line no-unused-vars
  const addTrack = useCallback((event) => {
    onAdd(track);
  }, [onAdd, track]);

  // eslint-disable-next-line no-unused-vars
  const removeTrack = useCallback((event) => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack} type="button">
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack} type="button">
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
