describe('My Third Cypress Test', function() {
    it('Assertions', function() {
   
    cy.visit("http://localhost:8080/owners/new");
    cy.url().should('include','owners')
    cy.url().should('eq','http://localhost:8080/owners/new')
    cy.url().should('contain','new')

    cy.get('.navbar-brand > span').should('exist')

})
})