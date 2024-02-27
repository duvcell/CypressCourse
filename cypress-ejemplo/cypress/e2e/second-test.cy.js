describe('Diligenciar formulario', () =>{
    beforeEach(()=>{
        cy.visit('cypress/ejemplo.html')
    })

    it('Diligenciar formulario y validar título', ()=>{
        cy.get('input[id="userName"]').type('Duvier Martínez Álvarez')
   
        cy.get('#userEmail').type('mi_correo@mi_empresa.com')
    
        cy.contains('Submit').click();

        cy.get('h1#titulo').should('have.text', 'PRUEBA HTML')
    })
})