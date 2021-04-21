describe("Sign in / Sign out", () => {
    it("Should sign in user and sign out", () => {
        cy.visit("");
        cy.get(':nth-child(2) > :nth-child(1) > .mat-button-wrapper').click()
        cy.get('.mat-card').should('contain', 'Zaloguj się');
        cy.get('#mat-input-0').type(Cypress.config('username'));
        cy.get('#mat-input-1').type(Cypress.config('password'));
        cy.get('.mat-card-actions > .mat-focus-indicator').click();
        cy.url().should('include', '/dashboard');
        cy.get('.float-right > section > .label > .button-row > .flex-container > :nth-child(2) > .mat-focus-indicator > :nth-child(1)').click();
        cy.url().should('include', '/');
    })
})