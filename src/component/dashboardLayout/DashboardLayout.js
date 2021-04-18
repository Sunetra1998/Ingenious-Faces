import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { GiGooeyEyedSun } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { RiCalendarLine } from "react-icons/ri";
import { GoFileDirectory } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
const navItems = [
  {
    name: "Programs",
    icon: <IoBookSharp />,
    link: "/",
  },
  {
    name: "Coaching",
    icon: <BsPeople />,
    link: "/recruitment",
  },
  {
    name: "Collaborations",
    icon: <GiGooeyEyedSun />,
    link: "/onboarding",
  },

  {
    name: "Progress",
    icon: <VscGraph />,
    link: "/reports",
  },
  {
    name: "Knowledge",
    icon: <IoSettingsOutline />,
    link: "/settings",
  },
  {
    name: "Calendar",
    icon: <RiCalendarLine />,
    link: "/calendar",
  },
];
const myfile = [
  { name: "Uploads", icon: <GoFileDirectory />, link: "" },
  { name: "Downloads", icon: <GoFileDirectory />, link: "" },
];

const DashboardLayout = ({ children }) => {
  // console.log(props)
  const location = useLocation();
  //console.log(location)
  return (
    <div className="dashboard">
      <nav className="side-nav-bar">
        <div className="logo-container">
          <img src={logo} className="image" />
        </div>
        <div className="nav-container">
          {navItems.map((navItems, index) => (
            <Link key={index} to={navItems.link}>
              <div
                className={`nav-item ${
                  navItems.link === location.pathname ? "selected" : " "
                }`}
              >
                {/* this line if navitem&link is on  path is same page  i.e. page  :: both are same link path needs be  */}
                {navItems.icon}
                <label className="item-name">{navItems.name}</label>
              </div>
            </Link>
          ))}
        </div>
        <div className="nav-container">
          <h3>My Files</h3>
        </div>
        <div className="myfiles">
          {myfile.map((item, index) => (
            <Link key={index} to={item.link}>
              <div
                className={`nav-item ${
                  item.link === location.pathname ? "selected" : ""
                } `}
              >
                {item.icon}
                <label className="item-name">{item.name} </label>
              </div>
            </Link>
          ))}
        </div>

        <div className="timezone">
          <h4>Your Timezone</h4>
          <h5>Netherlands</h5>
        </div>
      </nav>
      <div className="main-container">{children}</div>
    </div>
  );
};
export default DashboardLayout;
