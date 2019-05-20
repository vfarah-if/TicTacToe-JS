import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

export function getSquares(wrapper) {
    return wrapper.find('Square');
}

describe('Board', () => {
    it('should create a board with 9 configured squares', () => {
        const mockCallBack = jest.fn();
        const wrapper = shallow(<Board squares={Array(9).fill(null)} onClick={mockCallBack} />)
        const elements = getSquares(wrapper);
        expect(elements.length).toBe(9)
    });
});