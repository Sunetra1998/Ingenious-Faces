import React from "react";
import Input from "../input/Input";
import { FiSearch } from "react-icons/fi";
import { IoSendOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import Avatar from "../avatar/Avatar";

const Header = ({ pageHeader }) => {
  return (
    <header className="header">
      <div className="page-header">
        <h1>{pageHeader}</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* when i need i will uncomment it  becuase of i done for authentication */}
        <div className="action-container">
          {/* <Input placeholder="Search...." icon={<FiSearch />} classes={{inputComponentClass:"hover-action"}} /> */}
          <ImHome3 className="action-icon" />
          <BsBellFill className="action-icon" />
          <MdEmail className="action-icon" />
          {/* <IoSendOutline className="action-icon"/> */}
        </div>
        <div className="profile-container">
          {/* <label>saikrishna</label> */}
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
