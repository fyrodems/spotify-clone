import "./css/sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";

const Sidebar = () => {
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

      <stron className="sidebar__title">playlists</stron>
      <hr />

      <SidebarOption title="rap" />
      <SidebarOption title="rock" />
    </div>
  );
};

export default Sidebar;
