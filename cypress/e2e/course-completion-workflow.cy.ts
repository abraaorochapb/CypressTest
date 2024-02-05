import { should } from "chai";
describe('course completion workflow', () => {
    it('Should be able to find a course on the home page and complete the courses lessons', () => {
      cy.visit('http://localhost:3000')
      
      // escolher o curso, começar o primeiro tópico e verificar a url
      cy.getByData("course-1").find('a').contains('Get started').click()
      cy.get('.mt-1 > .block').should('exist')
      cy.location("pathname").should("eq", "/testing-foundations")
      cy.getByData("next-lesson-button").click()
      cy.getByData("skip-challenge-input").click()

      // completa o primeiro tópico e verifica a url
      cy.getByData("complete-lesson-button").find('a').contains('Next Lesson').click()
      cy.location("pathname").should("eq", "/testing-foundations/knowing-what-to-test")

      // completa o segundo tópico e verifica a url
      cy.getByData("complete-lesson-button").find('a').contains('Next Lesson').click()
      cy.location("pathname").should("eq", "/testing-foundations/manual-vs-automated-testing")

      // Completa o último tópico e verifica o redirecionamento para a home
      cy.getByData("complete-lesson-button").find('a').contains('Complete Course').click()
      cy.location("pathname").should("eq", "/")

      // garante que o curso está completo
      cy.getByData("course-1").find('a').contains('Get started').click()
      cy.get('.mt-1 > .block').should('exist')
      cy.location("pathname").should("eq", "/testing-foundations")
      cy.getByData("next-lesson-button").contains('Course Completed')
    })
})

