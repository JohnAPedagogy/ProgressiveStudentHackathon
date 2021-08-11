
Feature: View Teaching Classes

  ## Notes from 3 amigos meeting


  Scenario: Viewing members of a teaching class
    Given Tutor logs into platform
    And All teaching classes along with students are loaded
    When A teaching class is selected
    Then Tutor should be able to view all students of the teaching class
    And it should be in should be in the attendance tab

