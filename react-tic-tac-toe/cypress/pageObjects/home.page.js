export class HomePage {
    visit() {        
        return cy.visit('/');
    }    

    getStatusElement() {
        return cy.get('.status');        
    }

    getSquareElement(row, column) {
        return cy.get(`div.game-board > div > div:nth-child(${row}) > button:nth-child(${column})`);
    }
}