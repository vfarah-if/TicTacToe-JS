import React from 'react';
import {shallow} from 'enzyme';
import Square from './Square';

function getButton(wrapper){
    return wrapper.find('button.square');
}

describe('Square', () => {
    it('should render any value assigned', () => {
        const wrapper = shallow(<Square value='X'/>)
        expect(wrapper.text()).toBe('X');
    });

    it('should render a button that can have a click event assigned', () => {
        const mockCallBack = jest.fn();
        const wrapper = shallow(<Square onClick={mockCallBack} />)
        const buttonElement = getButton(wrapper);
        
        expect(buttonElement).toBeTruthy();
        buttonElement.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });    
});