import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Header from '../Header';


describe('Header', () => {

  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  })

  it('renders without crashing', () => {
    let mountedHeader = shallow(<Header />);
  });

  it('renders the wired brain logo', () => {
    const logoImg = mountedHeader.find('img[src="images/wired-brain-coffee-logo.png"]');
    expect(logoImg.length).toBe(1);
  })
})