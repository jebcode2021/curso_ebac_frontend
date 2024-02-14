/// <reference types="cypress" />

describe('Testes para a Agenda de contatos', () => {  
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('deve testar o formulário', () => {
        cy.get('header > h1').should('have.length.greaterThan', 0)
        cy.get('form > input').should('have.length', 3)
    })

    it('Deve preencher o formulário de inclusão', () => {
        cy.get('[type="text"]').type('Jonathan Euzébio Boza')
        cy.get('[type="email"]').type('jebcode@outlook.com.br')
        cy.get('[type="tel"]').type('(48) 9999 9999')
        cy.get('.adicionar').click()
        cy.screenshot('tela-inscricao-preenchido')
    })
})