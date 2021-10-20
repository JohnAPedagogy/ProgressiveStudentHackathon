Feature:
    # Student Manager -> Admin Epic -> Add entity Super-feature -> Enter information

    ## Introduction

    As a user with the admin role, I should be able to specify the new entity's information. This is done by a form 

    #### Acceptance Criteria (Rules)

    1. After clicking the add button the correct form should appear on the page
    2. The added entity item should be seen in the database with the correct information

    ### Scenarios

    1. The correct form appears when the create button is pressed on the view page
    2. User is able to see the new entity in the table once added
    3. The information matches the information added by the user

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
    

Scenario: 1. The correct form appears when the add button is pressed on the view page
    Then click("{}Admin")
    Then click("#Person")
    When click("#Create")
    Then waitFor("{h2}Create Person")
    