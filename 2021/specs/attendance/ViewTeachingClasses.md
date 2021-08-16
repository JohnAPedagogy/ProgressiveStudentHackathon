

# Attendance Feature


```Gherkin

Feature: View Teaching Classes

  ## Notes from 3 amigos meeting


  Scenario: Viewing members of a teaching class
    Given Sally Tutor logs into platform
    And teaching classes called "Group 6" along with students Josy, James and Andrew for Module AES are loaded
    And teaching classes called "Group 8" along with students Thomas, Mustafa for Module PLTS are loaded
    When A teaching class "Group 6" is selected
    Then Tutor should be able to view all students of the teaching class
    And it should have a header called "AES Attendance for group 6" and studnts Joy, James and Andrew

```

