Feature: Live Section

  Background:
    Given I am on the live page

  Scenario: Verify "Most Read" section on Desktop
    Then I verify that the video player is visible

  Scenario: Verify articles count in the "Most Read" section
    Then I verify that the swithc player button is visible
