import "./css/footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__details">
        <img src="https://upload.wikimedia.org/wikipedia" alt="song cover" />
        <div className="details__song-info">
          <h4>title</h4>
          <p>vocal</p>
        </div>
      </div>
      <div className="footer__controls">
        <ShuffleIcon className="controls__icon controls__green" />
        <SkipPreviousIcon className="controls__icon" />
        <PlayCircleOutlineIcon className="controls__icon" />
        <SkipNextIcon className="controls__icon" />
        <RepeatIcon className="controls__icon controls__green" />
      </div>
      <div className="footer__volume">
        <Grid container spacing={2}>
          <PlaylistPlayIcon />
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
