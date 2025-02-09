import commonFunctions from "../commonFunctions";

class AmphoraProducts{

    clickOnProduct(productName, timeout = 30000) {
        const productNameInUrl = commonFunctions.replaceSpaceWithHyphen(productName);

        cy.xpath('//ul[@id="menu-main-menu"]//a[text()="Products"]//ancestor::li', {timeout}).trigger('hover').click();
        cy.xpath(`//ul[@id="menu-main-menu"]//*[text()="${productName}"]`, {timeout}).should('have.attr','href',`https://amphora.net/product/${productNameInUrl.toLowerCase()}/`)
        cy.contains(productName).click({force : true});
    }

    validateProductPage(productName, timeout = 30000) {
        const productNameInUrl = commonFunctions.replaceSpaceWithHyphen(productName);
        cy.url().should('eq',`https://amphora.net/product/${productNameInUrl.toLowerCase()}/`);
        cy.xpath(`//h1[contains(text(),"${productName}")]`, {timeout}).should('contain.text', productName);
    }
}

export default new AmphoraProducts();