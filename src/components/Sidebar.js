import "../css/sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import { DataLayerContext } from "../utils/DataLayer";
import { useContext } from "react";

const Sidebar = () => {
  const useDataLayerValue = useContext(DataLayerContext);
  const [{ playlists }, dispatch] = useDataLayerValue;

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        alt="logo"
        src="https:getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryIcon} title="Your Library" />

      <strong className="sidebar__title">playlists</strong>
      <hr />

      {playlists?.items?.map((playlist, index) => {
        console.log(index, playlist);
        return <SidebarOption key={playlist.id} title={playlist.name} />;
      })}
    </div>
  );
};

export default Sidebar;
