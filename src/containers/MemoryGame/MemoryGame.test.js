import React from "react";
import { shallow } from "enzyme";
import Memory from "./Memory";

describe("<Memory/>", () => {
  it("renders properly", () => {
    const wrapper = shallow(<Memory />);
    console.log(wrapper.debug());
  });
});
