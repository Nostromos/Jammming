/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchButton from './components/SearchButton/SearchButton';
import TrackList from './components/TrackList/TrackList';
import Spotify from './Spotify';

function App() {
  const { searchResults, setSearchResults } = useState([]);
  const { playlistName, setPlaylistName } = useState('');
  const { playlistTracks, setPlaylistTracks } = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const addTrack = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => {
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id);
    });
  };

  return (
    <div className="app">
      <SearchBar onSearch={search} />
    </div>
  );
}

export default App;
