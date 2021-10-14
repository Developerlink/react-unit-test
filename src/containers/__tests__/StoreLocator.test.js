import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';


describe("StoreLocator", () => {

  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });
 
  it('renders learn react link', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });
  
  it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
  })

  it('renders 2 buttons', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(2);
  })

  it('renders a map', () => {
    const maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);
  })


})