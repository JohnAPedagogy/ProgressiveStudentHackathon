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

