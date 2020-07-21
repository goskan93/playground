import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

describe("<Layout/>", () => {
  it.only("renders without error", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find("withRouter(Header)")).toHaveLength(1);
    expect(wrapper.find("main")).toHaveLength(1);
    expect(wrapper.exists(".Layout")).toBeTruthy();
  });
});
