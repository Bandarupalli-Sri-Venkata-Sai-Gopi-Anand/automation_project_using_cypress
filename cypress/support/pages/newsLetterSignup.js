import commonFunctions from "../commonFunctions";

class NewsLetterSignup{

    //method to click on dropdown options under Resources tab
    clickOnDropdownOptionUnderMenuItem( dropdownOption, menuItem, timeout = 30000) {
        const nameInUrl = commonFunctions.replaceSpaceWithHyphen(dropdownOption);

        cy.log('menuItem is '+ menuItem);
        cy.log('product name is ' + dropdownOption);

        cy.xpath(`//ul[@id="menu-main-menu"]//a[text()="${menuItem}"]//ancestor::li`, {timeout}).trigger('hover').click();
        cy.xpath(`//ul[@id="menu-main-menu"]//*[text()="${dropdownOption}"]`, {timeout}).should('have.attr','href',`https://amphora.net/${nameInUrl.toLowerCase()}`)
        cy.contains(dropdownOption).click({force : true});
    }

    verifyNewsLetterSignUpForm(timeout = 30000){
        cy.get('[class="fserv-container"]',{timeout}).should("be.visible");
        cy.get('[class="fserv-form-name"]',{timeout}).should("contain.text","Newsletter Sign Up");
    }

    typeEmail(email, timeout = 30000){
        cy.get('[name="contact[email]"]',{timeout}).type(email);
    }

    typeFirstName(firstName, timeout = 30000){
        cy.get('[name="contact[first_name]"]',{timeout}).type(firstName);
    }

    typeLastName(lastName, timeout = 30000){
        cy.get('[name="contact[last_name]"]',{timeout}).type(lastName);
    }

    clickOnSignUpButton(timeout = 30000){
        cy.get('[class*="button-submit"]',{timeout}).should('have.attr','type','submit').and('contain.text','Sign Up').click();
    }

    validateSignUpSuccessMessage(timeout = 30000){
        cy.get('[class*="success show-notification visible"]',{timeout}).should("exist").and("be.visible"); // entire notification panel
        cy.get('[class*="success show-notification visible"] [class="icon-success"]',{timeout}).should("be.visible"); // green tick icon
        cy.get('[class*="success show-notification visible"] span',{timeout}).should("exist").and("be.visible").and("contain.text","Thank you for signing up for our newsletter. We are thrilled to have you join our community. Every quarter, you will receive exclusive content designed to keep you informed about generic topics within the CTRM industry.");
    }
}

export default new NewsLetterSignup();