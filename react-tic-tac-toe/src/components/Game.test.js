import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';

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

    it('should create a board and set x as the first player', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Game />);
        
        const result = renderer.getRenderOutput();

        expect(result.props.children).toMatchSnapshot();
    });

    it('should set X or player one as the first player', () => {
        const wrapper = shallow(<Game />);
        const status = getStatus(wrapper);
        expect(status).toBeTruthy();
        expect(status.text()).toBe('Next player: X');
    });

    it('should toggle active players', () => {
        const wrapper = shallow(<Game />);
        let status = getStatus(wrapper);
        expect(status.text()).toBe('Next player: X');
        
        wrapper.instance().handleClick(TOP_LEFT);
        
        status = getStatus(wrapper);
        expect(status.text()).toBe('Next player: 0');
    });

    // NOTE: This loads all the subcomponents into a tree and allows interaction with the component and lifecyles
    //      is an interesting way to see the difference between shallow and create
    it('should toggle active players with create', () => {
        const component = create(<Game />)                
        const root = component.root;
        const instance = root.instance;
        expect(component.toJSON()).toEqual(expect.not.stringContaining('Next player: X'));

        instance.handleClick(TOP_LEFT);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should prevent the same position being edited more than once', () => {
        const wrapper = shallow(<Game />);
        expect(getStatus(wrapper).text()).toBe('Next player: X');
        wrapper.instance().handleClick(TOP_LEFT);
        wrapper.update();
        expect(getStatus(wrapper).text()).toBe('Next player: 0');

        wrapper.instance().handleClick(TOP_LEFT);
        wrapper.update();
        
        expect(getStatus(wrapper).text()).toBe('Next player: 0');
    });

    testScenarios.forEach((theory) => {
        it(theory.scenario, () => {
            const wrapper = shallow(<Game />);
            console.log('Scenario', theory.data, theory.expectedWinner);
            theory.data.forEach(cell => {
                wrapper.instance().handleClick(cell);
            });
            console.log('Example', theory.example);            
            expect(getStatus(wrapper).text()).toBe(theory.expectedWinner);
        });
    });
});