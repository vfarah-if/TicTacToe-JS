import React from 'react';
import { shallow, mount } from 'enzyme';

import Board, { 
    TOP_LEFT, TOP_MIDDLE, TOP_RIGHT, 
    MIDDLE_LEFT, MIDDLE, MIDDLE_RIGHT 
    } 
    from './Board';

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

    it('should toggle active players', () => {
        const wrapper = shallow(<Board/>)
        const elements = getSquares(wrapper);
        let status = getStatus(wrapper);
        expect(status.text()).toBe('Next player: X')
        const firstSquare = elements.first();
        firstSquare.simulate('click');
        status = getStatus(wrapper);
        expect(status.text()).toBe('Next player: 0')
    });    

    it('should prevent the same position being edited more than once', () => {
        const wrapper = mount(<Board/>)
        const squares = getSquares(wrapper);
        const firstSquare = squares.first();
        expect(firstSquare.text()).toBe('');
        expect(getStatus(wrapper).text()).toBe('Next player: X')

        firstSquare.simulate('click');
        wrapper.update();

        expect(firstSquare.text()).toBe('X');
        expect(getStatus(wrapper).text()).toBe('Next player: 0')

        firstSquare.simulate('click');
        wrapper.update();

        expect(firstSquare.text()).toBe('X');
        expect(getStatus(wrapper).text()).toBe('Next player: 0')
    }); 
    
    it('should present a winner when the top horizontal row is uniform', () => {
        const wrapper = mount(<Board/>)
        // X X X
        // 0 0 -
        // - - -
        wrapper.instance().handleClick(TOP_LEFT);   // X
        wrapper.instance().handleClick(MIDDLE_LEFT);// 0
        wrapper.instance().handleClick(TOP_MIDDLE); // X
        wrapper.instance().handleClick(MIDDLE);     // 0
        wrapper.instance().handleClick(TOP_RIGHT);  // X

        expect(getStatus(wrapper).text()).toBe('Winner: X')
    });

    it('should present a winner when the middle horizontal row is uniform', () => {
        const wrapper = mount(<Board/>)
        // 0 0 -
        // X X X
        // - - -
        wrapper.instance().handleClick(MIDDLE_LEFT);
        wrapper.instance().handleClick(TOP_LEFT);   
        wrapper.instance().handleClick(MIDDLE);     
        wrapper.instance().handleClick(TOP_MIDDLE); 
        wrapper.instance().handleClick(MIDDLE_RIGHT);

        expect(getStatus(wrapper).text()).toBe('Winner: X')
    });
    
});