# Registration/Authentication Epic
The authentication system will enable the user to authenticate securely and based on their role will allocate what the user sees and has access to.
![Authentication module](../auth.PNG)
<!-- ![Authentication module](../../karate/k01.PNG) -->


## Registration/Signup Feature

As a user I want to register on the platform so I can access the platform


### Acceptance Criteria (Rules)

1. email and password and password confirmation fields are mandatory
2. user is allowed one account per email (i.e a user cannot use one email to register multiple accounts)
3. All users are registered as tutors by default
Password and confirmation password field must be masked
4. Password must be 6 characters
5. Should be limited to the following characters
    - Uppercase letters: A-Z.
    - Lowercase letters: a-z.
    - Numbers: 0-9.
    - Symbols: ~`! @#$%^&*()_-+={[}]|\:;"'<,>.?/

### Scenarios
1. Sign up with valid credentials
2. Sign up with invalid email
3. Sign up with invalid password
4. Sign up with non matching password
5. Sign up with blank mandatory field(s)
6. Sign up with already registered email





```gherkin
Scenario 1. Sign up with valid credentials

Given user is on the progressive registration page
When user enters a valid email 
And enters a valid password
And enters a matching confirmation password
And click on sign up
Then account is registered (ie. username and password saved to the system)
And a message specifying succesful registration is displayed
And a verification email is sent to the user


Scenario 2. Sign up with invalid email

Given user is on the progressive system
When user enters an invalid email 
And enters a valid password
And enters a matching confirmation password
And click on sign up
Then registration is unsuccesful
And an  error message that specifies email is invalid is displayed.

Scenario 3. Sign up with invalid password

Given user is on the progressive homepage
When user enters valid email 
And enters an invalid password 
And enters a matching confirmation password
And click on sign up
Then registration is unsuccesful
And an  error message that specifies password is invalid is displayed.



Scenario 4. Sign up with non matching password

Given user is on the progressive system
When user enters an invalid email 
And enters a valid password
And enters a non matching confirmation password
And clicks on sign up
Then registration is unsuccesful
And an  error message that specifies password confirmation doesn't match is displayed

Scenario 5. Sign up with blank mandatory field(s)

Given user is on the progressive system
When user leaves  mandatory field(s) blank
And clicks on sign up
Then registration is unsuccesful
And an  error message that specifies that  mandatory field(s) is blank = " x field"  cannot be blank
And the field is higlighted


Scenario 6. Sign up with already registered email

Given user is on the progressive system
When user enters an already used email 
And enters a valid password
And enters a matching confirmation password
And click on sign up
Then registration is unsuccesful
And an  error message that tells user the email already exists 
**And  user is prompted to login or 



2. Verification email on sign up

As a newly registered user,
I want to verify my email 
So i can start using the system

Details
Verification link is sent to email on complete registration
Verification link is valid for 24 hours

Acceptance criteria

Scenario 1. verification link is available on sign up
Given user is newly registered 
And account verification link is sent
when user accesses the the email used for registration
then account verificaltion link is available

Scenario 2. account verification with valid link/session 

Given user acceses account verification link
And the verification link is valid (within 24 hours of registration
And user session is active
When user verifies link
Then user is redirected to dashboard
And the account is verified with a message displayed of succesful account activation

**Scenario 3. account verification with valid link/ expired session

Given user acceses account verification link
And the verification link is valid (within 24 hours of registration
And user session is expired
When user verifies link
Then user is redirected to the log in page 
***And the account is not verified

Scenario 4. Account verified but not logged in

Given user has verified the account verification link
when user logs in

Scenario 5. account verification with expired link

Given user acceses account verification link
And the verification link is expired (after 24 hours of registration
When user verifies link
Then user is redirected to homepage
And the account is not verified 
And an expired link message displayed to 
And user is prompted to request new activation link

Scenario 6. Verification link not sent
Given user 

Scenario 7. Reuse of verification link

Given user has already verified the verification link
When user verifies the link again
Then User is redirected to dashboard



3. Log in
As a user 
I want to log in with my credentials 
so I can access the system

Scenario 1. Login with valid credentials

Scenario 2. Login with invalid email (invalid email, password and unregistered email, **unverified email, blank field)

Scenario 3. Login without acount link verification
Given user is newly registerd 
And has not verified account
When user enters valid registered email and password
Then user is prompted with message to verify email address
And Login is unsuccesful









```