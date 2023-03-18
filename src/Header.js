import { useContext, useEffect } from "react";
import "./css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { DataLayerContext } from "./DataLayer";
// import spotify from "./App";

const Header = ({ spotify }) => {
  const useDataLayerValue = useContext(DataLayerContext);
  const [{ user }, dispatch] = useDataLayerValue;

  console.log(spotify);

  return (
    <div className="header">
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search for something" />
      </div>
      <div className="header__user">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
