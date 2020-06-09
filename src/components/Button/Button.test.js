import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("<Button>", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Button />);

    console.log(wrapper.debug());
  });
});
