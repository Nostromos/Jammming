/* eslint-disable no-console */

const { clientid, clientsecret } = require('./keys');

const SpotifyInfo = {
  clientId: clientid,
  clientSecret: clientsecret,
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

// eslint-disable-next-line no-unused-vars
let accessToken;

const Spotify = {
  async getAccessToken() {
    console.log('Getting access token...');
    const response = await fetch(SpotifyInfo.endpoints.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${SpotifyInfo.clientId}&client_secret=${SpotifyInfo.clientSecret}`,
    })
      // eslint-disable-next-line arrow-body-style
      .then((res) => {
        console.log(`Access Token Status: ${res.status}`);
        console.log('Turning response to JSON...');
        return res.json();
      })
      .then((jsonRes) => {
        // eslint-disable-next-line prefer-destructuring
        console.log('JSONifying response successful...');
        console.log('Setting access token...');
        accessToken = jsonRes.access_token;
        return accessToken;
      })
      .catch((e) => console.log(e));
    // console.log(`Your token is: ${accessToken}`);
    // console.log(`Your response is: ${response}`);
    return response;
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
    const token = await Spotify.getAccessToken();
    console.log(`Searching for ${term}...`);
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(`Search API Response Status: ${res.status}`);
        console.log('JSONifying response...');
        return res.json();
      })
      .then((jsonResponse) => {
        console.log('JSON successful.');
        if (!jsonResponse.tracks) {
          console.log('Response was empty.');
          return [];
        }
        return jsonResponse;
      });
    return response.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },
};

export default Spotify;
