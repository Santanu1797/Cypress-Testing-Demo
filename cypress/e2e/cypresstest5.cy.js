describe('My Fifth Cypress Test', function() {
    it('Search for the added owner in the owners list', function() {
   
    cy.visit("http://localhost:8080/")

    cy.get(".glyphicon-search").click()

    cy.get("input[name=lastName]").type("Das")

    cy.get("button.btn-default").click()


})
})