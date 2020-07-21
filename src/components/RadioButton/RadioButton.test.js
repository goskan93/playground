import React from "react";
import { shallow } from "enzyme";
import RadioButton from "./RadioButton";

describe("<RadioButton/>", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<RadioButton />);
  });
  afterEach(() => {
    wrapper = null;
  });
  it("renders without error", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists(".RadioButton-Container")).toBeTruthy();
    expect(wrapper.exists("label")).toBeTruthy();
    expect(wrapper.exists("input")).toBeTruthy();
  });
  it("correctly change props", () => {
    wrapper.setProps({ value: 3, label: "TestBtn", onChange: jest.fn(), checked: true });
    const inputWrapper = wrapper.find("input");

    expect(inputWrapper.prop("checked")).toBeTruthy();
    expect(inputWrapper.prop("onChange")).toBeDefined();
    expect(inputWrapper.text()).toBeDefined();
    expect(inputWrapper.prop("value")).toBe(3);
  });
});
