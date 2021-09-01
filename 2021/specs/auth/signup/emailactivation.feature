Feature: Email Activation


# Registration/Authentication module-> Registration/Sign up Epic --> Email activation feature
The authentication system will enable the user to authenticate securely and based on their role will allocate what the user sees and has access to.
![Authentication module](../auth.PNG)
<!-- ![Authentication module](../../karate/k01.PNG) -->

## User Story

As a newly registered user,
I want to verify my email 
So I can start using the system

## Acceptance Criteria (Rules)
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

Scenario: 1. verification link is available on sign up
Given user is newly registered 
And account verification link is sent
when user accesses the email used for registration then account verificaltion link is available

Scenario: 2. account verification with valid link/session 

Given user acceses account verification link
And the verification link is valid (within 24 hours of registration)
And user session is active
When user verifies link
Then the account is verified with a message displayed of succesful account activation
And user is redirected to dashboard

**Scenario: 3. account verification with valid link/ expired session

Given user acceses account verification link
And the verification link is valid (within 24 hours of registration
And user session is expired
When user verifies link
Then user is redirected to the log in page 
**And the account is not verified

Scenario: 4. Account verified but not logged in

Given user has verified the account verification link
when user logs in

Scenario: 5. account verification with expired link

Given user acceses account verification link
And the verification link is expired (after 24 hours of registration
When user verifies link
Then user is redirected to homepage
And the account is not verified 
And an expired link message displayed to user
And user is prompted to request new activation link

Scenario: 6. Verification link not sent
Given user 

Scenario: 7. Reuse of verification link

Given user has already verified the verification link
When user verifies the link again
Then User is redirected to dashboard
