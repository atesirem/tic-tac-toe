// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import GameBoard from './GameBoard';

describe('GameBoard component', () => {
  it('renders without crashing', () => {
    shallow(<GameBoard />);
  });

});
