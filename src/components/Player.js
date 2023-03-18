import "../css/player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
