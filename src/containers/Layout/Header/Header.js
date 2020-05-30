import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = (props) => (
  <>
    <a className="Nav-Link" href="\tictactoe">
      Tic Tac Toe
    </a>
    <a className="Nav-Link" href="\treasure">
      Treasure
    </a>
    <a className="Nav-Link" href="\memory">
      Memory
    </a>
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

const Header = () => {
  return (
    <header className="Header">
      <NavigationDesktop />
      <NavigationMobile />
    </header>
  );
};

export default Header;
