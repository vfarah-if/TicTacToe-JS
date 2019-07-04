import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-test-renderer';
import { render } from 'react-dom';

import Board from './Board';
import ShallowRenderer from 'react-test-renderer/shallow';

export function getSquares(wrapper) {
    return wrapper.find('Square');
}

describe('Board', () => {
    let container;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('should create a board with 9 configured squares', () => {
        const wrapper = shallow(<Board squares={Array(9).fill(null)} />)
        const elements = getSquares(wrapper);
        expect(elements.length).toBe(9)
    });

    it('should create a board with 9 configured squares using shallow render', () => {
        const renderer = new ShallowRenderer()
        
        renderer.render(<Board squares={Array(9).fill(null)} />);
        
        const result = renderer.getRenderOutput();
        expect(result.props.children).toMatchSnapshot();
    });

    it('should call the click event when clicking on the board', () => {
        const mockCallBack = jest.fn();

        act(() => {
            render(<Board squares={Array(9).fill(null)} onClick={mockCallBack} />, container);
        });
        
        const buttons = container.querySelectorAll('button');        
        expect(buttons.length).toBe(9);
        const button = buttons[0];
        buttons[0].click();

        expect(mockCallBack).toBeCalledTimes(1);
    });
});