/* eslint-disable */
import React from 'react';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
  const test = `test`;
  
  return <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>>
}

export default SearchResults;
