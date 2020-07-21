import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("<Home/>", () => {
  it.only("renders without error", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h3")).toHaveLength(1);
    expect(wrapper.find("Cube")).toHaveLength(1);
    expect(wrapper.exists(".Home")).toBeTruthy();
  });
});
