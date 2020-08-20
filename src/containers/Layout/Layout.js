import React from "react";
import Header from "./Header/Header";
import "./Layout.scss";
const layout = (props) => (
  <div className="Layout">
    <Header />
    <main>{props.children}</main>
  </div>
);

export default layout;
