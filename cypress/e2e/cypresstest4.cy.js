describe('My Fourth Cypress Test', function() {
    it('Add an owner and pet in the owners list', function() {
   
    cy.visit("http://localhost:8080/")

    cy.get(".glyphicon-search").click()
    cy.wait(1000)

    cy.contains("Add Owner").click()
    cy.wait(1000)

    cy.get("#firstName").type("Santanu")

    cy.get("#lastName").type("Das")

    cy.get("input[name=address]").type("Barrackpore")

    cy.get("input[name=city]").type("Kolkata")

    cy.get("input[name=telephone]").type("0987654321")
    cy.wait(1000)

    cy.contains("Add Owner").click()
    cy.wait(1000)

    cy.contains("Add New Pet").click()
    cy.wait(1000)

    cy.get("#name").type("Lucy")
    cy.wait(1000)

    cy.get("#birthDate").type("2023/06/25")
    cy.wait(1000)

    cy.get("select").select("dog")
    cy.wait(1000)

    cy.contains("Add Pet").click()



})
})   