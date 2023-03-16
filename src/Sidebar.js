import "./css/sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        alt="logo"
        src="https:getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </div>
  );
};

export default Sidebar;
