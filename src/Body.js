import { useContext } from "react";
import "./css/body.css";
import { DataLayerContext } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Song from "./Song";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useContext(DataLayerContext);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__banner">
        <img src={discover_weekly?.images[0].url} alt="playlist" />
        <div className="banner__text">
          <strong>playlista</strong>
          <h2>{discover_weekly?.name}</h2>
          {console.log(discover_weekly)}
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="songs__controls">
          <PlayCircleFilledIcon className="controls__play" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <Song track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
