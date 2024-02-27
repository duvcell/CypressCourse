class HomeEjemplo{

    //Mapeo de elementos
    elements={
        inputFullName: () => cy.get('input[id="userName"]'),
        inputEmail: () => cy.get('#userEmail'),
        buttonSubmit: () => cy.contains('Submit')
    }

    //Acciones sobre cada elemento
    typeFullName(fullName){
        this.elements.inputFullName().type(fullName);
    }

    typeEmail(email){
        this.elements.inputEmail().type(email);
    }

    clickOnSubmit(){
        this.elements.buttonSubmit().click();
    }
}
module.exports = new HomeEjemplo();