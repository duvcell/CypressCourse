class LoginPage{
    
        //Mapeo de elementos
        elements={
            inputEmail: () => cy.get('input[type="email"]'),
            inputPassword: () => cy.get('input[placeholder="Password"]'),
            buttonSignIn: () => cy.contains('button', 'Sign in')
        }
    
        //Acciones sobre cada elemento
        typeEmail(email){
            this.elements.inputEmail().type(email);
        }
    
        typePassword(password){
            this.elements.inputPassword().type(password);
        }
    
        clickOnSignIn(){
            this.elements.buttonSignIn().click();
        }

        submitLogin(email, password){
            this.typeEmail(email),
            this.typePassword(password),
            this.clickOnSignIn();
        }
}
module.exports = new LoginPage();