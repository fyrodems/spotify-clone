import "./css/body.css";
import Header from "./Header";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__banner">
        <img src="" alt="" />
        <div className="banner__text">
          <strong>playlist</strong>
          <h2>discover weekly</h2>
          <p>desc</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
