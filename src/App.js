/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
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

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  });

  return (
    <div className="app">
      <SearchBar onSearch={search} />
      <div className="playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
