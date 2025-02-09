import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import petStoreAPI from "../pages/petStoreAPI.js";


Given("I create a petStore api with {string}, {string}, {string} and {string}", function(petId, petName, petStatus, photoURLs){
    this.petId = petId;
    this.petName = petName;
    this.petStatus = petStatus;
    this.photoURLs = photoURLs;

    petStoreAPI.createPETApi(petId, petName, petStatus, photoURLs).then((response) => {
        expect(response.status).to.eq(200);
    })
})

Then("I should be able to fetch the pet details based on petID {string}", function(petId){
    petStoreAPI.getPetById(petId).then((response) => {
        expect(response.status).to.eq(200);

        cy.log("API Response is "+ JSON.stringify(response.body));

        expect(response.body.name).to.eq(this.petName);
    })
})

When("I update the pet Status to {string}", function(updatedPetStatus){
    petStoreAPI.updatePetStatusByPetId(this.petId, updatedPetStatus).then((response) => {
        expect(response.status).to.eq(200);
    })
})

Then("I should see the updated pet status {string} in pet details", function(updatedPetStatus){
    petStoreAPI.getPetById(this.petId).then((response) => {
        cy.log("updated pet details " + JSON.stringify(response.body));

        expect(response.body.status).to.eq(updatedPetStatus);
    })
})

When("I delete the pet details", function(){
    petStoreAPI.deletePetDetailsByPetId(this.petId).then((response) => {
        expect(response.status).to.eq(200);
    })
})

Then("I should confirm the pet details are deleted", function(){
    petStoreAPI.getPetById(this.petId).then((response) => {
        expect(response.status).to.eq(404);

        cy.log("get pet details api response after pet details deleted "+ JSON.stringify(response.body));
    })
})