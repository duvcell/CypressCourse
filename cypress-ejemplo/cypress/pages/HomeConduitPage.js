class HomeConduitPage{

    elements={
        labelProfile: (username) => cy.get('a[href="#/@'+username+'"]')
    }

    checkTitle(username){
        this.elements.labelProfile(username).should('be.visible');
    }
}
module.exports = new HomeConduitPage();