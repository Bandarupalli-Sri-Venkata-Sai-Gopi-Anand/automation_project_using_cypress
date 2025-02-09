Feature: NewsLetter Signup for Amphora

Scenario Outline: Signup news letter and Assert Thank you for signup message
    Given I am on Amphora Home page
    When I click on "<resource>" dropdown option from "<menuItem>"
    Then I am able to view signup form
    And I enter "<email>", "<firstName>" and "<lastName>" and Clicked on Signup Button
    Then I am able to view 'Thank you for signing up for our newsletter' message

Examples:
    | resource           | menuItem  | email                              | firstName                  | lastName     |
    | Newsletter sign-up | Resources | amphoraCypressAssignment@gmail.com | testUser                   | 1234         |
    | Newsletter sign-up | Resources | svsga1081@gamil.com                | Sri Venkata Sai Gopi Anand | Bandarupalli |