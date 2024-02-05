import { should } from "chai"

describe('Homepage Test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('Hero Section tests', () => {

    it('should be able to visit', () => {
      cy.getByData("hero-heading").should("exist").contains('Testing Next.js Applications with Cypress')
    })
  
    it('checks if the features on the homepage are correct', () => {
      cy.get('dt').eq(0).contains("4 Courses")
      cy.get('dt').eq(1).contains("25+ Lessons")
      cy.get('dt').eq(2).contains("Free and Open Source")
    })

  })

  
  
})