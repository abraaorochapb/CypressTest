import { should } from "chai"

describe('Homepage Test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  context('Hero Section tests', () => {

    it('should be able to visit', () => {
      cy.getByData("hero-heading").should("exist").contains('Testing Next.js Applications with Cypress')
    })
  
    it('checks if the features on the homepage are correct', () => {
      cy.get('dt').eq(0).contains("4 Courses")
      cy.get('dt').eq(1).contains("25+ Lessons")
      cy.get('dt').eq(2).contains("Free and Open Source")
    })

  });

  context('Courses Section tests', () => {
    
    it('Should be able to open the first course on the page', () => {
      cy.getByData("course-0").find('a').contains('Get started').click()
      cy.get('.mt-1 > .block').should('exist')
      cy.location("pathname").should("equal", "/testing-your-first-application")
    });

    it('Should be able to open the second course on the page', () => {
      cy.getByData("course-1").find('a').contains('Get started').click()
      cy.get('.mt-1 > .block').should('exist')
      cy.location("pathname").should("equal", "/testing-foundations")
    });

    it('Should be able to open the third course on the page', () => {
      cy.getByData("course-2").find('a').contains('Get started').click()
      cy.get('.mt-1 > .block').should('exist')
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    });

  });

})