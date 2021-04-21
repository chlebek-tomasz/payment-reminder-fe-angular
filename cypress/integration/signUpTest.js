describe("Sign up new user", () => {
    it("Should register new user", () => {
        cy.visit("");
        cy.get('.float-right > section > .label > .button-row > .flex-container > .button-container > :nth-child(1)').click();
        cy.get('.mat-card').should('contain', 'Zarejestruj się');
        cy.get('#mat-input-0').type(generateUserEmail());
        cy.get('#mat-input-1').type(Cypress.config('password'));
        cy.get('#mat-input-2').type(Cypress.config('firstName'));
        cy.get('#mat-input-3').type(Cypress.config('lastName'));
        cy.get('.mat-card-actions > .mat-focus-indicator').click();
        cy.get('.mat-card').should('contain', 'Zaloguj się');
    })
})

function generateUserEmail() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += '@';
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }