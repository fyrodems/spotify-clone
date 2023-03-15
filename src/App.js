import { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromResponseUrl } from "./spotify";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponseUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div className="app">{token ? <></> : <Login />}</div>;
};

export default App;
