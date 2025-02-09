import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import commonFunctions from "../commonFunctions";
import newsLetterSignup from "../pages/newsLetterSignup";

Given("I am on Amphora Home page", function() {
    commonFunctions.visitAmphoraPage();
})

When("I click on {string} dropdown option from {string}", function(resource, menuItem){
    cy.log("MI in step file "+ resource);
    cy.log("product in step file "+ menuItem);
    newsLetterSignup.clickOnDropdownOptionUnderMenuItem(resource, menuItem);
})

Then("I am able to view signup form", function() {
    newsLetterSignup.verifyNewsLetterSignUpForm();
})

When("I enter {string}, {string} and {string} and Clicked on Signup Button", function(email, firstName, lastName){
    newsLetterSignup.typeEmail(email);
    newsLetterSignup.typeFirstName(firstName);
    newsLetterSignup.typeLastName(lastName);
    newsLetterSignup.clickOnSignUpButton();
})

Then("I am able to view 'Thank you for signing up for our newsletter' message", function(){
    newsLetterSignup.validateSignUpSuccessMessage();
})