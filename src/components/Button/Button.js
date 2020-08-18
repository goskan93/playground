import React from "react";
import "./Button.scss";

const button = (props) => (
  <button className={`Button ${props.btnClass}`} onClick={props.click} disabled={props.disabled ? props.disabled : false}>
    {props.label}
  </button>
);

export default button;
