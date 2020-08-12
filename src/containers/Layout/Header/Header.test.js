import React from "react";
import { shallow, mount } from "enzyme";
import Header, { NavigationMobile, NavigationDesktop, Navigation } from "./Header";

describe("<Navigation/>", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find("Fragment")).toHaveLength(1);
    wrapper.find("NavLink").forEach((node) => expect(node.hasClass("Nav-Link")).toBeTruthy());
    wrapper.find("NavLink").forEach((node) => expect(node.prop("to")).toBeDefined());
    wrapper.find("NavLink").forEach((node) => expect(node.text()).toBeDefined());
  });
});
describe("<NavigationDesktop/>", () => {
  it("renders without error", () => {
    const wrapper = shallow(<NavigationDesktop />);
    expect(wrapper.find("nav")).toHaveLength(1);
    expect(wrapper.find("nav").hasClass("Nav-Desktop")).toBeTruthy();
    expect(wrapper.find("Navigation")).toHaveLength(1);
  });
});
describe("<NavigationNavigationMobileobile/>", () => {
  it.only("renders without error", () => {
    const wrapper = shallow(<NavigationMobile />);
    expect(wrapper.find(".Mobile")).toHaveLength(1);
    expect(wrapper.find(".Menubar")).toHaveLength(1);
    expect(wrapper.find("nav")).toHaveLength(1);
    expect(wrapper.find("Navigation")).toHaveLength(1);
  });
  it("changes prop openDrawer when click", () => {
    const wrapper = shallow(<NavigationMobile />);
    console.log(wrapper.debug());
    expect(wrapper.find("FaBars")).toHaveLength(1);
    expect(wrapper.find("nav").hasClass("Nav-Mobile")).toBeTruthy();
    wrapper.find(".Menubar").simulate("click", true);
    expect(wrapper.find("FaTimes")).toHaveLength(1);
    expect(wrapper.find("nav").hasClass("Nav-Mobile Close")).toBeTruthy();
  });
});
describe("<Header/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header.WrappedComponent />);
  });
  it("renders without error", () => {
    // console.log(wrapper.debug());

    expect(wrapper.find("header")).toHaveLength(1);
    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("FaDice")).toHaveLength(1);
    expect(wrapper.find("NavigationDesktop")).toHaveLength(1);
    expect(wrapper.find("NavigationMobile")).toHaveLength(1);
    expect(wrapper.find("header").hasClass("Header")).toBeTruthy();
    // expect(wrapper.find("div")[0].hasClass("Logo")).toBeTruthy();
  });
  it("change value openDrawe when click logo", () => {});
});
