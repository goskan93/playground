import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes, FaDice } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Navigation = (props) => (
  <>
    <NavLink className="Nav-Link" to="/tictactoe">
      Tic Tac Toe
    </NavLink>
    <NavLink className="Nav-Link" to="/treasure">
      Treasure
    </NavLink>
    <NavLink className="Nav-Link" to="/memory">
      Memory
    </NavLink>
  </>
);

const NavigationDesktop = () => (
  <nav className="Nav-Desktop">
    <Navigation />
  </nav>
);
const NavigationMobile = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawerHandler = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  let navClass = ["Nav-Mobile"];
  if (!openDrawer) navClass.push("Close");
  return (
    <div className="Mobile">
      <div className="Menubar" onClick={toggleDrawerHandler}>
        {openDrawer ? <FaTimes size="1.5rem" /> : <FaBars size="1.5rem" />}
      </div>
      <nav className={navClass.join(" ")}>
        <Navigation />
      </nav>
    </div>
  );
};

const Header = (props) => {
  return (
    <header className="Header">
      <div className="Logo" onClick={() => props.history.push("/")}>
        <FaDice size="3rem" color="#fff" />
      </div>
      <div>
        <NavigationDesktop />
        <NavigationMobile />
      </div>
    </header>
  );
};

export default withRouter(Header);
