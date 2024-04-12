/// <reference types ="Cypress" />


export class loginPage {
    constructor (){
        this.login= '.NavButton__nav-button___34wHC'
        this.user='#login > :nth-child(1) > .theme__inputElement___27dyY'
        this.password= '#login > :nth-child(2)'
        this.loginAccess='.Login__button-box___1OzjH > .theme__raised___ONZv6'
        this.verificationAccess= '.mui-btn > :nth-child(1)'
    }

    loginPageButton(){
        cy.get(this.login).click();
    }
    enterNameAndPassword(userName,passwordName){
        cy.get(this.user).type(userName)
        cy.get(this.password).type(passwordName)
    }
    clickLoginPage(){
        cy.get(this.loginAccess).click();
    }
    verificationPageAccess(){
        cy.get(this.verificationAccess).contains('Hello');
    }

}