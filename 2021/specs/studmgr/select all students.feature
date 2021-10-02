Feature: Attendance


Scenario: select all students
    Given the students in a teachingclass is displayed
    When the tutor clicks on select-all
    Then all the students in the teaching class is selected


Scenario: deselect all students
    Given that all the students in a teaching class is selected
    When the tutor clicks on select 
    Then all the students in the teaching class is deselected


Scenario: (de)select a student
    Given the students in a teachingclass is displayed
    When the instructor clicks on a student  
    Then the student in the teaching class is selected

Scenario: Scenario name(de)select a student
    Given that a student in a teaching class is selected
    When the instructor clicks on a student 
    Then the students in the is deselected


Scenario: Scenario name**update-saved-attendance
    Given that attendance in a teaching class is saved
    When a teacher clicks update
    Then the attendance is .........


Scenario: add-attendance-comment (is the attendance for specific students
    Given that a student is selected
    And the attendance is availavle/taken
    When tutor enters a comment
    Then the student attendance is displayed with the comment 

Scenario: change-attendance
    Given that a student is selected
    And the attendance is availavle/taken
    When tutor chooses the "<attendance>" status
    Then the attendance is added
    And the relevant "<color>" for the attendance marker is displayed
    Examples: status
    |Atendance|  | Color|
    |Present |    | Green|
    |Absent |     |Red |
    |Late |       | Peach|
    |Imcomplete|  |Blue|
    | Left with permission|  |Yellow|

Scenario: save-attendance to db
    Given that the attendance is availavle/taken
    When tutor clicks save
    Then the attendance is saved
    And the database is updated

Scenario:take-attendance (how does the week in focus applies for the attendance)
    Given that a student is selected
    When tutor chooses the "<attendance>" status
    Then the attendance is added
    And the relevant "<color>" for the attendance marker is displayed 
    Examples: status
    |Atendance|  | Color|
    |Present |    | Green|
    |Absent |     |Red |
    |Late |       | Peach|
    |Imcomplete|  |Blue|
    | Left with permission|  |Yellow|

Scenario: view group--student-rpag

Scenario: view TeachingClass-students
Given that a tutor is on the attendance page
When tutor selects a teaching class
Then the list of student for the teaching class is displayed  

Scenario: View TeachingClasses
Given that tutor logs into the platform
When the tutor choose attendance
Then a list of the tutors teaching class(es) is displayed.
