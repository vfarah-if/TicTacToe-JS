import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

function gameElement(wrapper) {
  return wrapper.find('Game');
}

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('should render a game', () => {
    const wrapper = shallow(<App />);
    const element = gameElement(wrapper);
    expect(element).toBeTruthy();
  });
});



