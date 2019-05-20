import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';

function getBoardElement(wrapper){
    return wrapper.find('game.game-board>Board');
}

describe('Game', () => {
    it('should create a board', () => {
        const wrapper = shallow(<Game/>);
        const boardElement = getBoardElement(wrapper);
        expect(boardElement).toBeTruthy();
    });
});