const HomeEjemplo = require("../../pages/HomeEjemplo")
const TitleEjemplo = require("../../pages/TitleEjemplo")

describe('Diligenciar formulario', () =>{
    beforeEach(()=>{
        cy.visit('cypress/ejemplo.html')
    })

    it('Diligenciar formulario y validar título', ()=>{
        HomeEjemplo.typeFullName('Duvier Martínez Álvarez');
        
        HomeEjemplo.typeEmail('mi_correo@mi_empresa.com');

        HomeEjemplo.clickOnSubmit();

        TitleEjemplo.checkTitle('PRUEBA HTML');
        
    })
})