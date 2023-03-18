import "./css/song.css";

const Song = ({ track }) => {
  return (
    <div className="song">
      <img
        className="song__album"
        src={track?.album.images[0].url}
        alt="album"
      />
      <div className="song__info">
        <h3>{track?.name}</h3>
        <p>
          {track?.artists.map((artist) => artist.name)}
          {/* {track?.album.name} */}
        </p>
      </div>
    </div>
  );
};

export default Song;
