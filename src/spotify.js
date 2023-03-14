// https://developer.spotify.com/documentation/web-playback-sdk/quick-start

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "ff57451b553242e5bc702690c27d2b4c";
const redirectUri = "http://localhost:3000";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
