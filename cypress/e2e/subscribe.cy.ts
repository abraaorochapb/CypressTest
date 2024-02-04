import { should } from 'chai';
describe('Newsletter subscription form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should allow users to subscribe with valid email', () => {
    cy.getByData("email-input").type("zezinho@teste")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should('exist').invoke('text').should('include', 'Success').and('include', 'zezinho@teste')
  });

  it('Should NOT allow users to subscribe with invalid email', () => {
    cy.getByData("email-input").type("zezinho")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should('not.exist')
  });

  it('Should NOT allow users to subscribe with empty email', () => {
    cy.getByData("submit-button").click()    
    cy.getByData("success-message").should('not.exist')
  });

  it('Should NOT allow users to subscribe twice with the same email', () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").should('exist').invoke('text').should('include', 'john@example.com already exists')
  });

});