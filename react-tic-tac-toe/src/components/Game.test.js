import React from 'react';
import { shallow } from 'enzyme';

import Game from './Game';
import { TOP_LEFT } from './Constants';
// import the test scenarios from a file to generate repetitive tests, see test at bottom for more
import testScenarios from './Game.test.scenarios.json';

function getBoardElement(wrapper) {
    return wrapper.find('game.game-board>Board');
}

function getStatus(wrapper) {
    return wrapper.find('div.status');
}

describe('Game', () => {
    it('should create a board', () => {
        const wrapper = shallow(<Game />);
        const boardElement = getBoardElement(wrapper);
        expect(boardElement).toBeTruthy();
    });

    it('should set X or player one as the first player', () => {
        const wrapper = shallow(<Game />)
        const status = getStatus(wrapper);
        expect(status).toBeTruthy();
        expect(status.text()).toBe('Next player: X')
    });

    it('should toggle active players', () => {
        const wrapper = shallow(<Game />)
        let status = getStatus(wrapper);
        expect(status.text()).toBe('Next player: X')
        wrapper.instance().handleClick(TOP_LEFT);
        status = getStatus(wrapper);
        expect(status.text()).toBe('Next player: 0')
    });

    it('should prevent the same position being edited more than once', () => {
        const wrapper = shallow(<Game />)
        expect(getStatus(wrapper).text()).toBe('Next player: X')
        wrapper.instance().handleClick(TOP_LEFT);
        wrapper.update();
        expect(getStatus(wrapper).text()).toBe('Next player: 0')

        wrapper.instance().handleClick(TOP_LEFT);
        wrapper.update();
        
        expect(getStatus(wrapper).text()).toBe('Next player: 0')
    });

    // Remarks : Utilised json-loader to load scenarios from a json file
    testScenarios.forEach((theory: any) => {
        it(theory.scenario, () => {
            const wrapper = shallow(<Game />)
            console.log('Scenario', theory.data, theory.expectedWinner);
            theory.data.forEach(cell => {
                wrapper.instance().handleClick(cell);
            });
            console.log('Example', theory.example);            
            expect(getStatus(wrapper).text()).toBe(theory.expectedWinner)
        });
    });
});