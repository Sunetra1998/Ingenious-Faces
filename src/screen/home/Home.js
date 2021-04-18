import React, { useState } from "react";
import Header from "../../component/header/Header";
import { IoTimerOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import NewNav from "../../component/nav/NewNav";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="home">
      <Header pageHeader="Program OverView:" />
      <div className="home-container">
        <div className="home-modal">
          <div className="modal-1">
            <div className="number">
              <h5>1</h5>
            </div>
            <div className="modal-title">
              <p>
                Market Research <AiOutlineRight className="right-icon" />
              </p>
              <div className="modal-icons">
                <span>
                  {" "}
                  <IoBag /> Research
                </span>
                <span>
                  {" "}
                  <IoTimerOutline /> SelfPaced
                </span>
              </div>
            </div>
          </div>
          <div className="modal-1">
            <div className="number">
              <h5>2</h5>
            </div>
            <div className="modal-title">
              <p>
                Solution Asessment <AiOutlineRight className="right-icon" />{" "}
              </p>
              <div className="modal-icons">
                <span>
                  <IoBag /> Reporting
                </span>
                <span>
                  {" "}
                  <IoTimerOutline />
                  SelfPaced
                </span>
              </div>
            </div>
          </div>
          <div className="modal-1">
            <div className="number">
              <h5>3</h5>
            </div>
            <div className="modal-title">
              <p>
                Opportunity Evalution <AiOutlineRight className="right-icon" />{" "}
              </p>
              <div className="modal-icons">
                <span>
                  {" "}
                  <IoBag />
                  Creativity
                </span>
                <span>
                  <IoTimerOutline /> SelfPaced{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="modal-1">
            <div className="number">
              <h5>4</h5>
            </div>
            <div className="modal-title">
              <p>
                Future Readiness <AiOutlineRight className="right-icon" />{" "}
              </p>
              <div className="modal-icons">
                <span>
                  <IoBag />
                  Critical Thinking
                </span>
                <span>
                  <IoTimerOutline />
                  SelfPaced
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <NewNav />
        </div>
      </div>
    </div>
  );
}
export default Home;
