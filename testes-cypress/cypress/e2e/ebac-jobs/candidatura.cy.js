/// <reference types="cypress" />

describe('Testes para a home', () => {  
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Jonathan Euzébio Boza')
        cy.get('input[name="email"]').type('jebcode@outlook.com.br')
        cy.get('input[name="telefone"]').type('(48) 99999-9999')
        cy.get('input[name="endereco"]').type('Rua JebCode, 2024, São Bento do Sul - SC')
        // cy.get('select').select('cursando-superior')
        cy.get('#mac').click()
        cy.get('select[name="escolaridade"]').select('cursando-superior')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('brigado pela candidatura!')
        })
        
        cy.screenshot('tela-inscricao-preenchido')
    })
})