import { loginPage } from "../support/PageObject/login";
import { mainPage } from "../support/PageObject/main";
import { checkOutPage } from "../support/PageObject/checkout";
import { orderSummary } from "../support/PageObject/ordersummary";

describe('Embryoxite Demo Test', () =>{
    const loginPages = new loginPage();
    const mainPages = new mainPage();
    const checkoutPages = new checkOutPage()
    const summary = new orderSummary()
    before(() => {

        cy.visit('');
        loginPages.loginPageButton();
    })

    it('Embryoxite Payment', ()=>{
        //Ingresar al sitio con usuario y password (cualquiera funciona).
        loginPages.enterNameAndPassword(Cypress.env().usuario, Cypress.env().password);
        loginPages.clickLoginPage();
        loginPages.verificationPageAccess();
        //Buscar un pasaje para 2 adultos y 1 niño en un rango  cualquiera de fechas.
        mainPages.selectDeparting();
        mainPages.selectCantidadAdultos();
        mainPages.selectCantidadNiños();
       // mainPages.verifyQuantity();
        //Filtrar los planetas azules y seleccionar Tayabamba.
        mainPages.selectPlanetColor();
        mainPages.selectPlanetLaunch();
        mainPages.clickBook();
    
    })
})