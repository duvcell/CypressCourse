class TitleEjemplo{

    elements={
        labelTitle: () => cy.get('h1#titulo')
    }

    checkTitle(title){
        this.elements.labelTitle().should('have.text', title)
    }
}
module.exports = new TitleEjemplo();