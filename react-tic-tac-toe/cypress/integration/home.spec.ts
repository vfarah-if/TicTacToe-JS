describe('Tic-tac-toe', () => {
    beforeEach(() => {
        cy.visit('/');        
    });

    it('should start a game with player x', () => {        
        cy.get('.status').should('have.text','Next player: X');        
    });

    it('should swap to player O on next move', () => {        
        cy.get('div.game-board > div > div:nth-child(1) > button:nth-child(1)').click();
        cy.get('.status').should('have.text','Next player: 0');
    });

    it('should let player x win when top row uniformly filled with x values', () => {        
        cy.get('div.game-board > div > div:nth-child(1) > button:nth-child(1)').click();
        cy.get('div.game-board > div > div:nth-child(2) > button:nth-child(1)').click();        
        cy.get('div.game-board > div > div:nth-child(1) > button:nth-child(2)').click();        
        cy.get('div.game-board > div > div:nth-child(2) > button:nth-child(2)').click();        
        cy.get('div.game-board > div > div:nth-child(1) > button:nth-child(3)').click();                
        cy.get('.status').should('have.text','Winner: X');
    });
});