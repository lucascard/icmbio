/// <reference types="cypress" />
// ./node_modules/.bin/cypress open para abrir o cypress
describe('icmbio', () => {
    it('Login + cadastro', () => {
        cy.visit('https://tcti.sicae.sisicmbio.icmbio.gov.br/')

        //LOGIN
        cy.get('#nuLogin').type('90938542168')
        cy.get('#senha').type('12345678')
        cy.get('.form-actions > .btn-primary').as('loginButton').click()

        cy.get('[data-content="Sistema para Obtenção de Autorização para Licenciamento Ambiental"] > .caption > .btn').click()
        cy.get('#usersList').select('COTEC - Coordenação de Tecnologia da Informação')

        cy.get('#feijoadaProfile').select('Chefia ICMBio')
        cy.get('#btn-access').click()

        cy.get('#tableProcesso_filter > label > .form-control').type('28')
        cy.get('[href="/designacao/chefia/telaDesignarAnalista/197"] > .text-success').click()

        cy.get('.filter-option-inner-inner').click()
        cy.wait(2000)
        cy.get('.bs-searchbox > .form-control').type('Aline Carla GonÇalves')
        cy.get('li > .dropdown-item').click()
        cy.get('#btnAddDesignacaoToList').click({force: true})
        cy.get('#btnSalvarDesignacao') .click()
    









    })
})