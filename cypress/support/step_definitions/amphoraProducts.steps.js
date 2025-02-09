import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import commonFunctions from "../commonFunctions";
import amphoraProducts from "../pages/amphoraProducts";


Given("I am on the Amphora homepage", function()  {
    commonFunctions.visitAmphoraPage();
});

When("I click on {string} under {string}", function( product, menuItem) {
    cy.log("MI in step file "+ menuItem);
    cy.log("product in step file "+ product);
    commonFunctions.clickOnDropdownOptionUnderMenuItem(product, menuItem);
});

Then("I am able to view {string} page", function(product){
    amphoraProducts.validateProductPage(product);
})

