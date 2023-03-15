import { useEffect } from "react";
import Login from "./Login";
import { getTokenFromResponseUrl } from "./spotify";

const App = () => {
  useEffect(() => {
    const token = getTokenFromResponseUrl();
    window.location.hash = "";
    console.log(token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
};

export default App;
