describe("Switch pages and open windows", () => {
    it("Should switch pages", () => {
        cy.visit("");
        cy.get(':nth-child(2) > :nth-child(1) > .mat-button-wrapper').click()
        cy.get('.mat-card').should('contain', 'Zaloguj się');
        cy.get('#mat-input-0').type(Cypress.config('username'));
        cy.get('#mat-input-1').type(Cypress.config('password'));
        cy.get('.mat-card-actions > .mat-focus-indicator').click();
        cy.url().should('include', '/dashboard');
        cy.get('.float-left > section > .label > .button-row > .flex-container > :nth-child(1) > .mat-focus-indicator > :nth-child(1)').click();
        cy.get('[ng-reflect-router-link="/payments"]').click();
        cy.url().should('include', '/payments');
        cy.get('.float-left > section > .label > .button-row > .flex-container > :nth-child(2) > .mat-focus-indicator > :nth-child(1)').click();
        cy.url().should('include', '/');
        cy.get('.float-left > section > .label > .button-row > .flex-container > :nth-child(1) > .mat-focus-indicator > :nth-child(1)').click();
        cy.get('[ng-reflect-router-link="/payments-history"]').click();
        cy.url().should('include', '/payments-history');
        cy.get('.float-left > section > .label > .button-row > .flex-container > :nth-child(2) > .mat-focus-indicator > :nth-child(1)').click();
        cy.url().should('include', '/');
        cy.get('.float-right > section > .label > .button-row > .flex-container > :nth-child(1) > .mat-focus-indicator > :nth-child(1)').click();
        cy.get('.menu > :nth-child(1)').click();
        cy.get('.mat-card').should('contain', 'Zmień email');
        cy.visit("");
        cy.get('.float-right > section > .label > .button-row > .flex-container > :nth-child(1) > .mat-focus-indicator > :nth-child(1)').click();
        cy.get('.menu > :nth-child(2)').click();
        cy.get('.mat-card').should('contain', 'Zmień hasło');
        cy.visit("");
        cy.get('.float-right > section > .label > .button-row > .flex-container > :nth-child(1) > .mat-focus-indicator > :nth-child(1)').click();
        cy.get('.menu > :nth-child(3)').click();
        cy.get('.mat-card').should('contain', 'Zmień dane');
        cy.visit("");
        cy.get('.float-right > section > .label > .button-row > .flex-container > :nth-child(2) > .mat-focus-indicator > :nth-child(1)').click();
        cy.url().should('include', '/');
    })
})