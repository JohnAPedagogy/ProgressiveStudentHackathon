Feature: Attendance


Scenario: select all students
    Given the students in a teachingclass is displayed
    when the instructor clicks on select 
    then all the students in the teaching class is selected


Scenario: (de)select all students
    Given that all the students in a teaching class is selected
    when the instructor clicks on select 
    then all the students in the teaching class is deselected


Scenario: (de)select a student
    Given the students in a teachingclass is displayed
    when the instructor clicks on a student  
    then the student in the teaching class is selected

Scenario: Scenario name(de)select a student
    Given that a student in a teaching class is selected
    when the instructor clicks on a student 
    then the students in the is deselected


Scenario: Scenario name**update-saved-attendance
    Given that attendance in a teaching class is saved
    when a teacher clicks update
    then the attendance is .........


Scenario: add-attendance-comment (is the attendance for specific students
    Given that a student is selected
    and the attendance is availavle/taken
    When tutor enters a comment
    Then the student attendance is displayed with the comment 

Scenario: change-attendance
    Given that a student is selected
    and the attendance is availavle/taken
    when tutor chooses the "<attendance>" status
    then the attendance is added
    and the relevant "<color>" for the attendance marker is displayed
    Examples: status
    |Atendance|  | Color|
    |Present |    | Green|
    |Absent |     |Red |
    |Late |       | Peach|
    |Imcomplete|  |Blue|
    | Left with permission|  |Yellow|

Scenario: save-attendance to db
    Given that the attendance is availavle/taken
    when tutor clicks save
    then the attendance is saved
    and the database is updated

Scenario:take-attendance (how does the week in focus applies for the attendance)
    Given that a student is selected
    when tutor chooses the "<attendance>" status
    then the attendance is added
    and the relevant "<color>" for the attendance marker is displayed 
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
when tutor selects a teaching class
then the list of student for the teaching class is displayed  

Scenario: View TeachingClasses
Given that tutor logs into the platform
when the tutor choose attendance
then a list of the tutors teaching class(es) is displayed.
