const sampleTracks = require('../../data/sampleTracks.json');

// console.log(typeof sampleTracks.tracks.items);
// console.log(sampleTracks.tracks.items);

function parseAlbumNames (response) {
  const tracks = response.tracks.items;
  tracks.forEach(track => {
    console.log(track.album.name);
  });
}

parseAlbumNames(sampleTracks);

/*
function TrackList() {
  const response = sampleTracks;

  for (let track of response) {
    return (
      <p key={track.id}>
      {track.album.name}
      -
      {track.artists.name}
      -
      {track.name}
    </p>
    )
  }
}
*/
