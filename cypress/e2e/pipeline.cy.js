describe('Boilerplate', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
    cy.contains('Messages')
  })
  it('can navigate from main page to messages', function() {
    cy.visit('http://localhost:8000')
    cy.get('a[href*="messages"]').click()
    cy.contains('Send!')
  })
})