import Body from "./Body";
import "./css/player.css";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Player;
