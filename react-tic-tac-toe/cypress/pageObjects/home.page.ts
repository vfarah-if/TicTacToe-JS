export class HomePage {
    visit(): any {
        return cy.visit('/');
    }    

    getStatusElement(): any {
        return cy.get('.status');
    }

    getSquareElement(row:number, column: number): any {
        return cy.get(`div.game-board > div > div:nth-child(${row}) > button:nth-child(${column})`);
    }
}