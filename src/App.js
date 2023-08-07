import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchButton from './components/SearchButton/SearchButton';
import TrackList from './components/TrackList/TrackList';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <SearchButton />
      <TrackList />
    </div>
  );
}

export default App;
