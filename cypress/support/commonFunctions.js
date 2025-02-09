class commonFunctions{
    visitAmphoraPage() {
        cy.visit('/'); // this will open baseUrl mentioned in cypress.config.js file
    }

    replaceSpaceWithHyphen(value){
        if(!value.includes('CTRM')){
            return value.replaceAll(' ','-');
        }
        else{
            let splitValue = value.split(' ');
            return splitValue[0];
        }
    }

    clickOnDropdownOptionUnderMenuItem( dropdownOption, menuItem, timeout = 30000) {
        const nameInUrl = this.replaceSpaceWithHyphen(dropdownOption);

        cy.log('menuItem is '+ menuItem);
        cy.log('product name is ' + dropdownOption);

        cy.xpath(`//ul[@id="menu-main-menu"]//a[text()="${menuItem}"]//ancestor::li`, {timeout}).trigger('hover').click();
        cy.xpath(`//ul[@id="menu-main-menu"]//*[text()="${dropdownOption}"]`, {timeout}).should('have.attr','href',`https://amphora.net/product/${nameInUrl.toLowerCase()}/`)
        cy.contains(dropdownOption).click({force : true});
    }


}

export default new commonFunctions();