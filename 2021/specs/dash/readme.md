# DashBoard Module
The dashboard is the landing page of the PSM portal. It will feature graph and card components showing student and tutor performance metrics.

![Authentication module](dash.PNG)

This module has the following epics

## A. Dashboard cards

As a user I want to register on the platform so I can access the platform


### Acceptance Critera

1. email and password and password confirmation fields are mandatory
2. user is allowed one account per email (i.e a user cannot use one email to register multiple accounts)
3. All users are registered as tutors by default
4. Password and confirmation password field must be masked

## B. Dashboard 

As a newly registered user,
I want to verify my email 
So i can start using the system

### Acceptance Criteria
1. Verification link is sent to email on complete registration
2. Verification link is valid for 24 hours

## C. Log in
As a user 
I want to log in with my credentials 
so I can access the system

### Acceptance Criteria

## D. System Role Configuration

### Acceptance Criteria
1. **A tutor can change status to HOD
**Only one HOD is allowed on the system (i.e 2. if a tutor has assigned HOD to self no other can reassign HOD status)
3. **An admin can asign HOD status to tutor
4. ***How would the system identify different departments
5. if a tutor is unregistered , can an admin assign a class
6. Admin assisgns class





```