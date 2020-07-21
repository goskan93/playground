import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("<Button>", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });
  afterEach(() => {
    wrapper = null;
  });
  it("renders without error", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists("button")).toBeTruthy();
    expect(wrapper.exists(".Button")).toBeTruthy();
  });
  it("has default props", () => {
    expect(wrapper.prop("disabled")).toBe(false);
  });
  it("correctly change props", () => {
    wrapper.setProps({ disabled: true, label: "TestBtn", click: jest.fn(), btnClass: "Test" });
    expect(wrapper.prop("disabled")).toBe(true);
    expect(wrapper.prop("onClick")).toBeDefined();
    expect(wrapper.text()).toBeDefined();
    expect(wrapper.prop("className").split(" ")[1]).not.toBe("undefined");
  });
});
