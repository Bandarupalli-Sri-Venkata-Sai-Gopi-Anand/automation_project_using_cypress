class PetStoreAPI{

    createPETApi(petId, petName, petStatus, photoURLs){
        const petData = {
            id: petId,
            name: petName,
            status: petStatus,
            photoUrls: [photoURLs]  // Adding image URL
        };

        return cy.request({
            method : 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body : petData
        });
    }

    getPetById(petId){
        return cy.request({
            method : 'GET',
            url : `https://petstore.swagger.io/v2/pet/${petId}`,
            failOnStatusCode: false 
        })
    }

    updatePetStatusByPetId(petId, updatedPetStatus){
        return cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/pet",
            body: {
                id: petId,  
                status: updatedPetStatus  
            },
            headers: { "Content-Type": "application/json" }
    
        })
    }

    deletePetDetailsByPetId(petId){
        return cy.request({
            method : "DELETE",
            url : `https://petstore.swagger.io/v2/pet/${petId}`
        })
    }
}

export default new PetStoreAPI();