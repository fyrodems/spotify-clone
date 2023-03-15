// https://developer.spotify.com/documentation/web-playback-sdk/quick-start

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "ff57451b553242e5bc702690c27d2b4c";
// const redirectUri = "http://localhost:3000";
const redirectUri = "http://192.168.1.133:3000"; //biuro

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const getTokenFromResponseUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export { authEndpoint, loginUrl, getTokenFromResponseUrl };
