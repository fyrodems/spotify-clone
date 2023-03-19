import { useContext, useEffect } from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { DataLayerContext } from "../utils/DataLayer";
import SearchEngine from "../utils/SearchEngine";

const Header = ({ spotify }) => {
  const useDataLayerValue = useContext(DataLayerContext);
  const [{ user }] = useDataLayerValue;

  // useEffect(() => {
  //   const pull_data = (data) => {
  //     console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  //     // return data;
  //   };

  //   return pull_data;
  // }, [data]);

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    // return data;
  };

  return (
    <div className="header">
      <div className="header__search">
        <SearchIcon />
        <SearchEngine func={pull_data} spotify={spotify} />
      </div>
      <div className="header__user">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
