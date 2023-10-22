describe('Boilerplate', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
    cy.contains('Messages')
  })
})