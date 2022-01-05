Feature:
# Student Manager -> Admin Epic -> View entity Super-feature -> Choose Entity

## Introduction
As a user using the view feature, I should be able to use the sidebar in order to decide wich entity to view

#### Acceptance Criteria (Rules)
1. The correct entity is displayed when the button on the sidebar is clicked

### Scenarios
1. The user selects which entity to view and the screen shows the correct table 

Background:
    # Given I have logged in to the portal successfully
    Given driver 'http://localhost:4200'
    #And driver.maximize()
    And waitFor("{button}Login").click()
    And waitFor("#username").clear()
    And input("#username", "admin")
    And waitFor("#inputPassword").clear()
    And input("#inputPassword", "admin")
    When click("{button}Sign in")
    Then waitFor("{}Admin")

Scenario: The user selects which entity to view and the screen shows the correct table 
    When click("{button} person")
    Then waitFor("{}person")
    
