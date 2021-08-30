# Attendance Epic
## Introduction
This epic wil cater for the student attendance data.  The features include
1. 

![Authentication module](attendance.PNG)
<!-- ![Authentication module](../../karate/k01.PNG) -->


## Login

As a user 
I want to log in with my credentials 
so I can access the system


### Acceptance Criteria (Rules)

1. 

### Scenarios
1. Login with valid credentials
2. Login with invalid email (invalid email, password and unregistered email, **unverified email, blank field)
3. Login without acount link verification

## Verification email on sign up feature

As a newly registered user,
I want to verify my email 
So i can start using the system

### Acceptance Criteria (Rules)
1. Verification link is sent to email on complete registration
2. Verification link is valid for 24 hours

### Scenarios
1. verification link is available on sign up
2. account verification with valid link/session
3. account verification with valid link/ expired session
4. Account verified but not logged in
5. account verification with expired link
6. Verification link not sent
7. Reuse of verification link

