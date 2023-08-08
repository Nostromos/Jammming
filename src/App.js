/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchButton from './components/SearchButton/SearchButton';
import TrackList from './components/TrackList/TrackList';

function App() {
  const { searchResults, setSearchResults } = useState([]);

  return (
    <div className="app">
      <SearchBar />
      <SearchButton />
      <TrackList />
    </div>
  );
}

export default App;
