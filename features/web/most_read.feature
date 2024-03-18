Feature: Most Read Section

  Background:
    Given I am on the homepage

  Scenario: Verify "Most Read" section on Desktop
    Then I should see the "Most Read" section

  Scenario: Verify articles count in the "Most Read" section
    Then I assert articles count in "Most Read" section is 10

  Scenario: accessibility url check
    When I click on empty space in header
    When I open accessibility menu
    When I click on skip to most read
    Then I assert '#most-read-container' is added to the link