
describe('diligenciar formulario', () =>{
    beforeEach(()=>{
        cy.visit('cypress/ejemplo.html')
    })

    it('diligenciar primer campo Full Name', ()=>{
        cy.get('input[id="userName"]').type('Duvier Martínez Álvarez')
    })

    it('diligenciar segundo campo', ()=>{
        cy.get('#userEmail').type('mi_correo@mi_empresa.com')
    })

    it('diligenciar primer campo', ()=>{
        cy.contains('Submit').click();
    })
})