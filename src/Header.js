import "./css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__search">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for artists, songs or something"
        />
      </div>
      <div className="header__user">
        <Avatar src="" alt="avatar" />
        <h4>Imie i coś tam</h4>
      </div>
    </div>
  );
};

export default Header;
