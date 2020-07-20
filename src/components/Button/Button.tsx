import React, { FunctionComponent } from "react";
import "./Button.css";

type buttonProps = {
  btnClass: string;
  click: () => void;
  disabled?: boolean;
  label: string;
};

const button: FunctionComponent<buttonProps> = (props) => (
  <button className={`Button ${props.btnClass}`} onClick={props.click} disabled={props.disabled ? props.disabled : false}>
    {props.label}
  </button>
);

export default button;
