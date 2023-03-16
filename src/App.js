import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromResponseUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { DataLayerContext } from "./DataLayer";
// import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const useDataLayerValue = useContext(DataLayerContext);

  const [{ user, token }, dispatch] = useDataLayerValue;

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
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
