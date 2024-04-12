/// <reference types = 'Cypress'/>

export class mainPage {
    constructor(){
        this.adultos='.Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY'
        this.selectadultos='.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)'
        this.niños=':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY'
        this.selectniños='.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)'
        this.departing=':nth-child(1) > [data-react-toolbox="date-picker"] > .theme__input___qUQeP > .theme__inputElement___27dyY'
        this.today = '.theme__active___2k63V > span'
        this.okey='.theme__navigation___3eiS- > :nth-child(2)'
        this.planetcolor='.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY'
        this.color='.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)'
        this.planetlaunch=':nth-child(1) > .theme__input___qUQeP > .theme__inputElement___27dyY'
        this.launch='.theme__values___1jS4g > :nth-child(8)' 
        this.book ='.theme__cardActions___1aHjq > .theme__button___1iKuo' 
    }

   selectDeparting(){
    cy.get(this.departing).click()
    cy.get(this.today).click()
    cy.get(this.okey).click()
   }

   selectCantidadAdultos(){
    cy.get(this.adultos).click();
    cy.get(this.selectadultos).click();

   }
   selectCantidadNiños(){
    cy.get(this.niños).click();
    cy.get(this.selectniños).click();
   }
   selectPlanetColor(){
    cy.get(this.planetcolor).click();
    cy.get(this.color).click();
   }
   selectPlanetLaunch(){
    cy.get(this.planetlaunch).click();
    cy.get(this.launch).click();
   }
   clickBook(){
    cy.get(this.book).click();
   }
}