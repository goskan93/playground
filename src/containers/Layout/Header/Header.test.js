import * as React from "react";
import { shallow } from "enzyme";
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
describe("<NavigationMobile/>", () => {
  it("renders without error", () => {
    const wrapper = shallow(<NavigationMobile />);
    expect(wrapper.find(".Mobile")).toHaveLength(1);
    expect(wrapper.find(".Menubar")).toHaveLength(1);
    expect(wrapper.find("nav")).toHaveLength(1);
    expect(wrapper.find("Navigation")).toHaveLength(1);
  });
  it("renders correctly when prop openDrawer is false", () => {
    const wrapper = shallow(<NavigationMobile openDrawer={false} />);
    expect(wrapper.find("FaBars")).toHaveLength(1);
    expect(wrapper.find("nav").hasClass("Nav-Mobile")).toBeTruthy();
  });
  it("renders correctly when prop openDrawer is true", () => {
    const wrapper = shallow(<NavigationMobile openDrawer={true} />);
    expect(wrapper.find("FaTimes")).toHaveLength(1);
    ["Nav-Mobile", "Close"].every((c) => expect(wrapper.find("nav").hasClass(c)).toBeTruthy());
  });
  it("changes prop openDrawer when click", () => {
    // const toggleDrawerHandlerMock = jest.fn();
    let openDrawerMock = true;
    const toggleDrawerHandlerMock = jest.fn();
    const wrapper = shallow(<NavigationMobile openDrawer={openDrawerMock} toggleDrawerHandler={toggleDrawerHandlerMock} />);
    wrapper.find(".Menubar").simulate("click");
    expect(toggleDrawerHandlerMock).toHaveBeenCalledTimes(1);
  });
});
describe("<Header/>", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);
  beforeEach(() => {
    const historyMock = { push: jest.fn() };
    wrapper = shallow(<Header.WrappedComponent history={historyMock} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders without error", () => {
    expect(wrapper.find("header")).toHaveLength(1);
    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("FaDice")).toHaveLength(1);
    expect(wrapper.find("NavigationDesktop")).toHaveLength(1);
    expect(wrapper.find("NavigationMobile")).toHaveLength(1);
    expect(wrapper.find("header").hasClass("Header")).toBeTruthy();
    expect(wrapper.find("div").first().hasClass("Logo")).toBeTruthy();
  });
  it("change value openDrawer when click logo", () => {
    wrapper.find(".Logo").props().onClick();
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith(true);
  });
  it("change value openDrawer when click NavigationMobile MenuBar", () => {
    wrapper.find("NavigationMobile").dive().find(".Menubar").props().onClick();
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith(true);
  });
});
