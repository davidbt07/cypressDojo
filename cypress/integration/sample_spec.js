describe('Prueba E2E CodeBreakerFront', () => {
    it('E2E full', () => {
        cy.visit('http://localhost:3000')
        cy.get('.juego').click()

        cy.url().should('include', '/game')

        cy.get('.labelGame')
            .type('1234')
            .should('have.value', '1234')

        cy.get('.enviarBtn').click()
    })
})
