import React, { FunctionComponent } from "react";
import "./RadioButton.css";

type radioBtnProps = {
  value: number;
  checked: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
};

const RadioButton: FunctionComponent<radioBtnProps> = (props) => {
  return (
    <label className="RadioButton-Container">
      <input type="radio" value={props.value} checked={props.checked} onChange={props.onChange} />
      {props.label}
    </label>
  );
};

export default RadioButton;
