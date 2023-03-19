import { useContext, useEffect } from "react";
import { DataLayerContext } from "../utils/DataLayer";
import "../css/footer.css";
import { Grid, Slider } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const Footer = ({ spotify }) => {
  const [{ token, item, playing }, dispatch] = useContext(DataLayerContext);

  useEffect(() => {
    spotify.getMyCurrentPlayingTrack().then((response) => {
      console.log(response);

      dispatch({
        type: "SET_PLAYING",
        playing: response.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: response.item,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({
        type: "SET_ITEM",
        item: response.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({
        type: "SET_ITEM",
        item: response.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      <div className="footer__details">
        {item ? (
          <>
            <img src={item?.album.images[0].url} alt={item?.name} />
            <div className="details__song-info">
              <h4>{item?.name}</h4>
              <p>{item?.artists.map((artist) => artist.name)}</p>
            </div>
          </>
        ) : (
          <div>
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__controls">
        <ShuffleIcon className="controls__icon controls__green" />
        <SkipPreviousIcon onClick={skipPrevious} className="controls__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="controls__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="controls__icon"
          />
        )}
        <SkipNextIcon onClick={skipNext} className="controls__icon" />
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
