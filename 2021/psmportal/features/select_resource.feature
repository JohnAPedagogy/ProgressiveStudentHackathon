Feature: Select Resource
  # # Student Manager -> Admin Epic -> Resource Entity Super Scenario (sub-feature) -> Select Resource
  # ## Introduction
  # The admin is used by user's with the admin role. This page is used to interact with the database.  For this sub feature/super scenario, the user from the dashboard page should be able to see the admin expander having a list of entities and once he selects Rources should be able to view this.
  # The following examples ensue.
  # 1.  User is able to see the admin expender
  # 1. Admin expander has list of entities containing the "Resource" item 
  # 2. The user can select the resource item to display a list of resources
  # ![Admin epic](../admin.PNG)
  # ## Feature: Select Resource to view from a list of all Resource entities
  # There will be a side bar with an admin dropdown (expandable) showing all the entities.
  # ### Acceptance Criteria (Rules)
  # 1. It is possible to get a list of collections (entities) from the database directly
  # 1. This will be a server-side functions that you can get from the repository implementation
  # 1. If you select Resource from the side bar, the list of all Resource entities should be displayed in the screen.
  # ### Scenarios
  # 1. User is able to see the admin expender
  # 1. Admin expander has list of entities containing the "Resource" item 
  # 2. The user can select the resource item to display a list of resources

  Scenario: 1. User is able to see the admin expander

    Given I have logged in to the portal successfully
    And I am on the dashboard page
    When I select the admin on the sidebar
    Then the sidebar should expand to reveal the {Resource} item
    
    # const { Given, When, Then } = require('cucumber')
    # const assert = require('assert')
    
    # Given('Lucy is located {int}m from Sean', function (distance) {
    #   this.lucy = new Person
    #   this.sean = new Person
    #   this.lucy.moveTo(distance)
    # })
    
    # When('Sean shouts {string}', function (message) {
    #   this.sean.shout(message)
    #   this.message = message
    # })
    
    # Then('Lucy hears Sean’s message', function () {
    #   assert.deepEqual(this.lucy.messagesHeard(), [this.message])
    # })