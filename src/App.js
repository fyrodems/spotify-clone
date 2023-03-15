import { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromResponseUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();
console.log(spotify);

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponseUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      console.log(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, [token]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;
