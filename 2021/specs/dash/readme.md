# DashBoard Module
The dashboard is the landing page of the PSM portal. It will feature graph and card components showing student and tutor performance metrics.

![Authentication module](Dashboard.PNG)

This module has the following epics

## A. Dashboard cards

As a user I will be able to see a range of cards that will display different type of information

#### Tutor

As a user with the tutor role, I will be able to see the following cards:

* RPAG Circle and crtical students: 
    * Card Description:
        * This card shows a circle with the percentage of students with each one of the RPAG values
    * Drilldown:
        * Show a list of students and their current grade on each module. This list will be divided by RPAG scores
        * Clicking on a student shows the student's profile page

* Attendance and Critical attendance:
    * Card Description:
        * n
    * Drilldown:
        * Show a list of students and their attendance for on each module. The table will highlight the classes where the student has less than 50% attendance. The table  will be divided by the different groups

#### Head of Department (HOD)

As a user with the HOD role, I will be able to see the following cards in addition to the tutor cards:

* Teacher RPAG Circle: 
    * Card Description:
        * Same as student RPAG circle
    * Drilldown:
        * Show a list of teachers and their current RPAG score
        * Clicking on a teacher will show the teacher's profile page 

* Management Matrix:
    * Card Description:
        * 4 odometers, each showing the progress for each category. (Critical, Important, Optional, Pending)
    * Drilldown:
        * 4 tabs, each having a list of bar graphs that show the progress for each task. 
        * Clicking on one of the graphs will show the people who have completed the tasks and those who have not

## B. Graphs

As a user I will be able to see two big graphs

#### Tutor

As a user with the tutor role, I will be able to see the following graphs:

* Bell curve with students grade: 
    * Card Description:
        * This graph will show the percentage of students that are getting a certian grade. Because of the nature of the data, the shape of the graph should simulate that of a bell curve.
    * Drilldown:
        * Same as the student RPAG card

* Attendance graph:
    * Card Description:
        * A line graph that tracks the attendance average attendance weekly and monthly  
    * Drilldown:
        * Same as attendance card 

#### Head of Department (HOD)

As a user with the HOD role, I will be able to see the same graphs as the tutor role. 


### Acceptance Criteria
1. The user can acces more information upon clicking on the different graphs
2. The graphs should change as more data is added to the database
3. 




## C. Marks Assesment 


## D. Sidebar

As a user, I am able to use the sidebar to navigate to different sections of the PSM portal 

### Acceptance Critera

1. The user should be able to use the sidebar to traverse to the 'Admin', 'Teaching modules' and 'Mark assesments' pages 


