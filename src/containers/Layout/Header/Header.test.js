import React from "react";
import { shallow } from "enzyme";
import Header, { NavigationMobile, NavigationDesktop, Navigation } from "./Header";

describe("<Navigation/>", () => {
  it.only("renders without error", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find("Fragment")).toHaveLength(1);
    wrapper.find("NavLink").forEach(node => expect(node.hasClass("Nav-Link")).toBeTruthy());
    wrapper.find("NavLink").forEach(node => expect(node.prop("to")).toBeDefined());
    wrapper.find("NavLink").forEach(node => expect(node.text()).toBeDefined());
    console.log(wrapper.debug());
  });
});
// describe("<NavigationDesktop/>", () => {
//   it("renders without error", () => {
//     const wrapper = shallow(<NavigationDesktop />);
//     // console.log(wrapper.debug());
//   });
// });
// describe("<NavigationMNavigationMobileobile/>", () => {
//   it("renders without error", () => {});
//   it("renders properly when drawer is opened", () => {});
//   it("renders properly when drawer is closed", () => {});
//   it("changes prop openDrawer when click", () => {});
// });
// describe("<Header/>", () => {
//   it("renders without error", () => {});
// });
