import React from "react";
import "./RadioButton.css";
const RadioButton = (props) => {
  return (
    <label className="RadioButton-Container">
      <input type="radio" value={props.value} checked={props.checked} onChange={props.onChange} />
      {props.label}
    </label>
  );
};

export default RadioButton;
