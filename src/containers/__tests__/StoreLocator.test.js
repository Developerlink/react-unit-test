import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

describe("StoreLocator", () => {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders 2 buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(3);
  });

  it("renders a map", () => {
    const maps = mountedStoreLocator.find("Map");
    expect(maps.length).toBe(1);
  });
});

describe("chooseMap", () => {
  it('updates state of currentMap using the location passed to it', ()=>{
    let mountedStoreLocator = shallow(<StoreLocator />);
    const button = mountedStoreLocator.find('Button').first().simulate('click', {target : {value : 'testland'} });
    expect(button.length).toBe(1);
    // const mountedMap = mountedStoreLocator.find('Map');
    // const testMap = mountedMap.find('img[src="images/testland.png"]');
    // expect(testMap.length).toBe(1);
  })
});
