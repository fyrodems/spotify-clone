import { useContext } from "react";
import "./css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { DataLayerContext } from "./DataLayer";

const Header = () => {
  const useDataLayerValue = useContext(DataLayerContext);
  const [{ user }, dispatch] = useDataLayerValue;

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
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;