/// <reference types="cypress" />
// ./node_modules/.bin/cypress open para abrir o cypress
describe('Sisfamilia', () => {
    it('Login + cadastro', () => {
        cy.visit('https://tcti.sicae.sisicmbio.icmbio.gov.br/')

        cy.get('#nuLogin').type('90938542168')
        cy.get('#senha').type('12345678')
        cy.get('.form-actions > .btn-primary').click()

    })

    it('entrando no sisfamilia', () => {

        cy.get('[data-content="Sistema de Informações das Famílias em Unidades de Conservação Federais"] > .caption > .btn').click()
        cy.get('#usersList').select('COTEC - Coordenação de Tecnologia da Informação')
        cy.get('#feijoadaProfile').select('Consulta')
        cy.get('#btn-access').click()
    
        //dentro do sisfamilia
        cy.get(':nth-child(1) > .navbar-item > .icon > .mdi').click()
        cy.contains('MENUS').should('be.visible')
        cy.get('.menu-item-label').click()
        cy.get('.level-item > .button').click()

        //CADASTRAR QUESTIONÁRIO
        //INDENTIFICAÇÃO DO FORMULÁRIO
        const termo = 'PARNA do Cabo Orange'
        cy.get('input[name="unidade de conservação"]').type(termo).then(() => {
            cy.contains(termo).click({ force: true })
        })
        cy.get('.is-1 > .control > .input').should('have.value', '169')

        //DADOS DO ENTREVISTADO
        cy.get(':nth-child(2) > .card-content > .columns > .is-4 > .control > .input')
            .type('Lucas Rodrigues Cardoso')
        cy.get('.dropdown-trigger > .control > .input').click()
        cy.get(':nth-child(1) > .select > select').select('fevereiro')
        cy.get('.datepicker-body > :nth-child(2) > :nth-child(4) > span').click()




        //PESQUISAR QUESTIONÁRIOS
        /*cy.get('.autocomplete > .control > .input').type('PARNA do Cabo Orange')
        cy.get('.dropdown-item > span').click()
        cy.get('.autocomplete > .control > .input').should('have.value', 'PARNA do Cabo Orange') 
        cy.get('.field > .control > .input').type('Lucas testador')

        cy.get('.field-body > .field > .control > .select > select').select('Em Andamento') */
    })
})