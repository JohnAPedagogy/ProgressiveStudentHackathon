Feature:
# Student Manager -> Admin Epic -> Resource Entity Super Scenario (sub-feature) -> Select Resource

## Introduction

The admin is used by user's with the admin role. This page is used to interact with the database.  For this sub feature/super scenario, the user from the dashboard page should be able to see the admin expander having a list of entities and once he selects Rources should be able to view this.

The following examples ensue.
1.  User is able to see the admin expender
1. Admin expander has list of entities containing the "Resource" item 
2. The user can select the resource item to display a list of resources

![Admin epic](../admin.PNG)

## Feature: Select Resource to view from a list of all Resource entities

There will be a side bar with an admin dropdown (expandable) showing all the entities.

### Acceptance Criteria (Rules)

1. It is possible to get a list of collections (entities) from the database directly
1. This will be a server-side functions that you can get from the repository implementation
1. If you select Resource from the side bar, the list of all Resource entities should be displayed in the screen.

### Scenarios

1. User is able to see the admin expender
1. Admin expander has list of entities containing the "Resource" item 
2. The user can select the resource item to display a list of resources

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

Scenario: 1. User is able to see the admin expander
  # And I am on the dashboard page
  Then waitFor("#adminbtn")

Scenario: 2. The Expander should Reveal the Resource Item
  # When I select the admin on the sidebar
  When click("#adminbtn")
  # Then the sidebar should expand to reveal the {Resource} item
  Then waitFor("{}Resource")
  
