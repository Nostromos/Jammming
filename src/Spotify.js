const SpotifyInfo = {
  clientId: '0535e48de9ed48288fd1cd581fc6a467',
  clientSecret: 'ba29add329844e42bdb3b201c1237f43',
  apiKey: '',
  redirectUri: 'http://localhost:3000',
  userId: '1222778101',
  endpoints: {
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
    apiUrl: 'https://api.spotify.com/v1',
    playlistEndpoint() {
      return `/users/${SpotifyInfo.userId}/playlists`;
    },
  },
};

const Spotify = {
  async getApiKey() {
    await fetch(SpotifyInfo.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${SpotifyInfo.clientId}&client_secret=${SpotifyInfo.clientSecret}`,
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        SpotifyInfo.apiKey = data;
        console.log(SpotifyInfo.apiKey);
      });
  },

  async savePlaylist(name, playlist) {
    await fetch(SpotifyInfo.endpoints.apiUrl + SpotifyInfo.endpoints.playlistEndpoint(), {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SpotifyInfo.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        'name': name,
        'description': 'Playlist created by Mike as a test',
      },
    })
      .then((response) => {
        console.log(response.status);
      });
  },

  async search(term) {

  },
}

Spotify.savePlaylist('test', []);

//Spotify.getApiKey();

/*
generateApiKey().then((response) => {
  console.log(response);
});
*/
