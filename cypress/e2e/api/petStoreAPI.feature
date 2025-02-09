Feature: Validate Create, Read, Update and Delete Operations on petStore API

Scenario Outline: Verify petStore CRUD Operations
    Given I create a petStore api with "<petID>", "<petName>", "<petStatus>" and "<photoURL>"
    Then I should be able to fetch the pet details based on petID "<petID>"
    When I update the pet Status to "<updatedPetStatus>"
    Then I should see the updated pet status "<updatedPetStatus>" in pet details
    When I delete the pet details
    Then I should confirm the pet details are deleted

Examples:
    | petID | petName | petStatus | photoURL                                                                                               | updatedPetStatus | 
    | 1111  | Dog     | available | https://www.istockphoto.com/photo/golden-retriever-dog-gm1252455620-365559764?searchscope=image%2Cfilm | sold             |
    | 2222  | Cat     | pending   | https://www.istockphoto.com/photo/cute-ginger-cat-gm1443562748-482502032                               | available        |