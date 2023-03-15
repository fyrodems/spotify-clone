import { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromResponseUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

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

      spotify.getMe().then((res) => {
        console.log(res);
      });
    }
  }, [token]);

  return <div className="app">{token ? <></> : <Login />}</div>;
};

export default App;
