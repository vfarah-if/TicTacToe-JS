import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

function getSquares(wrapper) {
    return wrapper.find('Square');
}

function getStatus(wrapper) {
    return wrapper.find('div.status');
}

describe('Board', () => {
    it('should set X or player one as the first player', () => {
        const wrapper = shallow(<Board/>)        
        const status = getStatus(wrapper);
        expect(status).toBeTruthy();
        expect(status.text()).toBe('Next player: X')
    });

    it('should create a board with 9 squares', () => {
        const wrapper = shallow(<Board/>)
        const elements = getSquares(wrapper);
        expect(elements.length).toBe(9)
    });    
});