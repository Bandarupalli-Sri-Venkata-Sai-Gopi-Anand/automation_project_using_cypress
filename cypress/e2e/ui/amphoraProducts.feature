Feature: Amphopra Products Navigation

Scenario Outline: Verify all product pages under products dropodown in Amphora Home page
    Given I am on the Amphora homepage
    When I click on "<product>" under "<menuItem>"
    Then I am able to view "<product>" page

Examples:
    | menuItem | product                      |
    | Products | Symphony CTRM                |
    | Products | Alchemy CTRM                 |
    | Products | VaR Module                   |
    | Products | Trade confirmations manager  |
    | Products | Freight manager              |
    | Products | Claims manager               |
    | Products | Symphony Credit              |
