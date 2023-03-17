import "./css/footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left"></div>
      <div className="footer__controls">
        <ShuffleIcon className="controls__green" />
        <SkipPreviousIcon className="controls__icon" />
        <PlayCircleOutlineIcon className="controls__icon" />
        <SkipNextIcon className="controls__icon" />
        <RepeatIcon className="controls__green" />
      </div>
      <div className="footer__right"></div>
    </div>
  );
};

export default Footer;
