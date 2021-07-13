/// <reference types="cypress" />
// ./node_modules/.bin/cypress open para abrir o cypress
describe('teste', () => {
    it('Login + cadastro', () => {
        cy.visit('https://tcti.sicae.sisicmbio.icmbio.gov.br/')

        cy.get('#nuLogin').type('90938542168')
        cy.get('#senha').type('12345678')
        cy.get('.form-actions > .btn-primary').as('loginButton').click()

        //SISVA - UNIDADE ORGANIZACIONAL/PERFIL
        cy.get('[data-content="Sistema de Vendas Antecipadas do ICMBio"] > .caption > .btn').click()
        cy.get('#usersList').select('ESEC Serra Geral do Tocantins - Estação Ecologica da Serra Geral do Tocantins')
        cy.get('#feijoadaProfile').select('Administrador COEST')
        cy.get('#btn-access').click()

        cy.wait(10000)
        cy.get(':nth-child(1) > [data-label="Publicado"] > .switch > .check').click()
        .should()


    })
})