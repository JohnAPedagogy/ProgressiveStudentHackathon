Feature: 
    # Student Manager -> Admin Epic -> Add entity Super-feature -> Display Error

    ## Introduction

    The UI should display an error if the data being entered is wrong

    #### Acceptance Criteria (Rules)
    1. An error message is displayed on the screen if the data is wrong
    1. Multiple error messages are displayed if necessary

    ### Scenarios

    1. An error message is displayed below the invalid property
    2. Multiple error messages are displayed 


Background:
    # Given I have logged in to the portal successfully
    Given driver 'http://localhost:4200'
    
    #And driver.maximize()
    #c:\\users\\Fran\\karate\\karate.bat
    And waitFor("{button}Login").click()
    And waitFor("#username").clear()
    And input("#username", "admin")
    And waitFor("#inputPassword").clear()
    And input("#inputPassword", "admin")
    When click("{button}Sign in")
    Then waitFor("{}Admin")
    Then click("{}Admin")
    Then click("#Group")
    Then click("#Create")
    Then waitFor("{h2}Create New Group")
    

Scenario: 1. An error message is displayed below the invalid property
    And waitFor("#GroupCode").clear()
    Then waitFor("{div} GroupCode is required.")

Scenario: 2. Multiple error messages are displayed 
    And waitFor("#GroupCode").clear()
    Then waitFor("{div} GroupCode is required.")
    
    