// eslint-disable-next-line no-unused-vars
import React from 'react';
import TrackList from '../TrackList/TrackList';

// eslint-disable-next-line react/prop-types
function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
