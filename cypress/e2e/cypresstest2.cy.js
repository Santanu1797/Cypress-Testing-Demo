describe('My Second Cypress Test', function() {
    it('Verify the title-positive', function() {
   
    cy.visit("http://localhost:8080/")
    cy.title().should('eq','PetClinic :: a Spring Framework demonstration')
})
    it('Verify the title-negative', function() {
   
    cy.visit("http://localhost:8080/")
    cy.title().should('eq','PetClinic :: a Spring Framework demonstration 1')
})

})