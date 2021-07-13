/// <reference types="cypress" />
// ./node_modules/.bin/cypress open para abrir o cypress
describe('Sisfamilia', () => {
        beforeEach(() => { 
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
        //Caracterização do Grupo Familiar
        //INDENTIFICAÇÃO DO FORMULÁRIO
        const termo = 'PARNA do Cabo Orange'
        cy.get('input[name="unidade de conservação"]').type(termo).then(() => {
            cy.contains(termo).click({ force: true })
        })
        cy.get('.is-1 > .control > .input').should('have.value', '169')

        //DADOS DO ENTREVISTADO
        cy.get(':nth-child(2) > .card-content > .columns > .is-4 > .control > .input').type('Lucas Rodrigues Cardoso')
        cy.get('.dropdown-trigger > .control > .input').click()
        cy.get(':nth-child(1) > .select > select').select('fevereiro')
        cy.get('.datepicker-body > :nth-child(2) > :nth-child(4) > span').click()
        cy.get('.is-3 > .control > .select > select').select('RG')
        cy.get('div[name="número do documento"] > .control > .input').should('be.visible').type('245479156')
        cy.get('div[name="orgão expedidor"] > .control > .input').type('ssp-df')
        cy.get('div[name="uf do orgão expedidor"] > .control > .select > select').select('Distrito Federal')

        //DADOS DO ENTREVISTADOR
        cy.get(':nth-child(3) > .card-content > .columns > .is-4 > .control > .input').type('Tiago Rodrigues')
        cy.get('div[name="cpf"] > .control > .input').type('45070114000')
        cy.get('div[name="telefone"] > .control > .input').type('61985236698')
        cy.get('.is-primary > span').as('buttonSalvar').click()
        //cy.contains('Questionário criado com sucesso!').should('be.visible')

        //Caracterização da área de moradia e uso
        cy.get('.field > .block > :nth-child(1) > .check').as('yesButton').click()
        cy.get(':nth-child(3) > .field > .control > .input').as('nomePai').type('Raimundo Costa')
        cy.get(':nth-child(4) > .field > .control > .input').as('nomeMae').type('Gau Costa')
        cy.get(':nth-child(5) > .field > .control > .input').as('apelido').type('Lucao')
        cy.get(':nth-child(6) > .field > .control > .select > select').as('identidadeGenero').select('Homem')
        cy.get(':nth-child(7) > .field > .control > .select > select').as('estadoCivil').select('Solteiro')
        cy.get(':nth-child(8) > .field > .control > .select > select').as('nacionalidade').select('Brasileiro')
        cy.get('.dropdown-trigger > .control > .input').as('calendario').click()
        cy.get(':nth-child(1) > .select > select').as('mesCalendario').select('fevereiro')
        cy.get(':nth-child(5) > .is-selectable > span').as('diaCalendario').click()
        cy.get(':nth-child(10) > .field > .control > .select > select').as('ufNascimento').select('São Paulo')
        const naturalidadeInput = 'Osasco'
        cy.get('.autocomplete > .control > .input').type(naturalidadeInput).then(() => {
            cy.contains(naturalidadeInput).click({ force: true }) })
        cy.get(':nth-child(12) > .field > .control > .select > select').as('nivelEscolaridade').select('Ensino Superior Incompleto')
        cy.get(':nth-child(13) > .field > .control > .input').as('contatoEmergencia').type('61998158161')
        cy.get('.is-primary > span').as('proximoButton').click()

        //ATIVIDADES DO RESPONSÁVEL FAMILIAR

        cy.get('select').as('ocupacao').select('Pescador')
        cy.wait(2000)
        cy.get(':nth-child(2) > .column > .button > span').as('adicionarButton').click()
        cy.get('@ocupacao').select('Artesão')
        cy.get('@adicionarButton').click()
        cy.get('@ocupacao').select('Comerciante')
        cy.get('@adicionarButton').click()
        cy.get(':nth-child(2) > .field > .control > .select > select').as('ocupacaoPrincipal').select('Pescador')
        cy.get(':nth-child(3) > .is-actions-cell > .buttons > .b-tooltip > .tooltip-trigger > .button > :nth-child(1) > .icon > .mdi')
        .as('excluirButton').click()
        cy.get(':nth-child(1) > :nth-child(3) > .column > .is-primary > span').click({ multiple: true})

        //DOCUMENTOS DO RESPONSÁVEL FAMILIAR
        cy.get(':nth-child(1) > .field > .control > .input').as('identidade').type('448452145')
        cy.get(':nth-child(2) > .field > .control > .input').as('cpf').type('20730040089')
        cy.get(':nth-child(3) > .field > .control > .input').as('NIS').type('22522692045')
        cy.get(':nth-child(4) > .field > .control > .input').as('DAP').type('84344557854')
        cy.get(':nth-child(5) > .field > .control > .input').as('RGP').type('8877442235')
        cy.get('.is-primary > span').as('salvarButton').click()

        //CONFIRMAR QUESTIONÁRIO
        cy.get(':nth-child(5) > .column > .button > span').click
        
         
    })
})