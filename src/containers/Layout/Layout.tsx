import React, { FunctionComponent, ReactNode } from "react";
import Header from "./Header/Header";
import "./Layout.css";

type layoutProps = {
  children: ReactNode;
};

const layout: FunctionComponent<layoutProps> = ({ children }) => (
  <div className="Layout">
    <Header />
    <main>{children}</main>
  </div>
);

export default layout;
