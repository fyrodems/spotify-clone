import { useContext, useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromResponseUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { DataLayerContext } from "./utils/DataLayer";

const spotify = new SpotifyWebApi();
console.log(spotify);

const App = () => {
  const useDataLayerValue = useContext(DataLayerContext);

  const [{ token }, dispatch] = useDataLayerValue;

  useEffect(() => {
    const hash = getTokenFromResponseUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // 37i9dQZEVXcVqP01wLCHPU !!! playlist.id (console.log(discover__weekly) in Body.js)
      spotify
        .getPlaylist("37i9dQZEVXcVqP01wLCHPU")
        .then((res) =>
          dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: res })
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{token ? <Player spotify={spotify} /> : <Login />}</>;
};

export default App;
