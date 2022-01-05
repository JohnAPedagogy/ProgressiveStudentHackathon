Feature:
# Student Manager -> Admin Epic -> View entity Super-feature -> Sort List

## Introduction

As a user using the view feature, I should be able to sort the resulting entities by different parameters

### Acceptance Criteria (Rules)
1. The user is able to sort the entities by various criteria
2. The sort can be ascending
3. The sort can be descending

### Scenarios
1. The user selects the attribute by which the information is sorted
2. By default the entities are sorted in ascending order (1-9 and a-z)
3. By pressing the attribute, the sorting order changes to descending (9-1 and z-a)

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

Scenario:
    
