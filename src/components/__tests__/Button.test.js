import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it("renders without crashing", () => {
    let mountedButton = shallow(<Button />);
  });

  it("renders a button", () => {
    const buttons = mountedButton.find("button");
    expect(buttons.length).toBe(1);
  });

  it("calls a function passed to it when clicked", () => {
   const mocCallBack = jest.fn();
   const mountedButtonWithCallback = shallow(<Button handleClick={mocCallBack} />);
   mountedButtonWithCallback.find('button').simulate('click');
   expect(mocCallBack.mock.calls.length).toEqual(1); 
  });
});

describe("When a location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1",
    };
    mountedButton = shallow(<Button {...props} />);
  });

  it("displays the location", () => {
    const locName = mountedButton.find(".location-button");
    expect(locName.text()).toEqual("Location1");
  });
});

describe("When a location is NOT passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it("displays the location", () => {
    const locName = mountedButton.find(".location-button");
    expect(locName.text()).toEqual("All locations");
  });
});
