Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  describe('cypress playground', () => {
  
        it('on idx with docker',() => {
            cy.task('writeLine','run successfully')
        })

                                        })