import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';

function gameElement(wrapper) {
  return wrapper.find('Game');
}

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
    unmountComponentAtNode(div);
  });
  
  it('should render a game using enzyme', () => {
    const wrapper = shallow(<App />);
    const element = gameElement(wrapper);
    expect(element).toBeTruthy();
  });

  it('should render a game using shallow renderer', () => {
    const renderer  = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();

    expect(result.props.children).toMatchSnapshot();
  });
});

