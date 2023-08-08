const SpotifyInfo = {
  clientId: '0535e48de9ed48288fd1cd581fc6a467',
  clientSecret: 'ba29add329844e42bdb3b201c1237f43',
  token: {},
  redirectUri: 'http://localhost:3000',
  userId: '1222778101',
  endpoints: {
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
    apiUrl: 'https://api.spotify.com/v1',
    playlistEndpoint() {
      return `/users/${SpotifyInfo.userId}/playlists`;
    },
    authorize: '/authorize',
    search: '/search?type=-"track"&market="US"&q=',
  },
};

const Spotify = {
  async getAccessToken() {
    await fetch(SpotifyInfo.endpoints.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${SpotifyInfo.clientId}&client_secret=${SpotifyInfo.clientSecret}`,
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        SpotifyInfo.token = jsonResponse;
        return SpotifyInfo.token.access_token;
      });
  },

  // eslint-disable-next-line no-unused-vars
  async savePlaylist(name, playlist) {
    await fetch(SpotifyInfo.endpoints.apiUrl + SpotifyInfo.endpoints.playlistEndpoint(), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SpotifyInfo.access_token}`,
        'Content-Type': 'application/json',
      },
      body: {
        // eslint-disable-next-line quote-props
        'name': name,
        description: 'Playlist created by Mike as a test',
      },
    })
      .then((response) => {
        console.log(response.status);
      });
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();

    await fetch(
      SpotifyInfo.endpoints.apiUrl + SpotifyInfo.endpoints.search + term,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },
};

Spotify.getAccessToken();

// export default Spotify;
