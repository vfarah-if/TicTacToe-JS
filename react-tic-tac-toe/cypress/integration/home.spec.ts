import { HomePage } from './../pageObjects/home.page';

describe('Tic-tac-toe', () => {
    let homePage: HomePage;

    beforeEach(() => {
        homePage = new HomePage();
        homePage.visit();
    });

    it('should start a game with player x', () => {
        const status = homePage.getStatusElement();
        status.should('have.text', 'Next player: X');
    });

    it('should swap to player O on next move', () => {
        const topLeft = homePage.getSquareElement(1, 1);
        topLeft.click();
        const status = homePage.getStatusElement();
        status.should('have.text', 'Next player: 0');
    });

    it('should let player x win when top row uniformly filled with x values', () => {
        const topLeft = homePage.getSquareElement(1, 1);
        topLeft.click();
        const middleLeft = homePage.getSquareElement(2, 1);
        middleLeft.click();        
        const topMiddle = homePage.getSquareElement(1, 2);
        topMiddle.click();
        const middle = homePage.getSquareElement(2, 2);
        middle.click();
        const topRight = homePage.getSquareElement(1, 3);
        topRight.click();
        const status = homePage.getStatusElement();
        status.should('have.text', 'Winner: X');
    });
});