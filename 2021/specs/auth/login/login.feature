Feature: Login
# [Registration/Authentication Epic --> Login Feature](https://trello.com/c/ThICrGei/9-login)
The authentication system will enable the user to authenticate securely and based on their role will allocate what the user sees and has access to.
![Authentication module](../auth.PNG)
<!-- ![Authentication module](../../karate/k01.PNG) -->

## Login

As a user 
I want to log in with my credentials 
so I can access the system


### Acceptance Criteria (Rules)

1. email and password and password confirmation fields are mandatory
2. Password and confirmation password field must be masked
3. No validation checks necessary
4. Should log in if authenticated

### Scenarios
1. Login with valid credentials
2. Login with invalid email (invalid email, password and unregistered email, **unverified email, blank field)
3. Login without acount link verification

Scenario: 1 Login with valid credentials
    # Given user is on the login page
    # And is registered
    Given driver 'http://localhost:4200'
    And driver.maximize()
    And waitFor("{button}Login").click()
    # When user enters valid email and password
    When waitFor("#username").clear()
    And input("#username", "admin")
    And waitFor("#inputPassword").clear()
    And input("#inputPassword", "admin")
    And waitFor("{button}Sign in").click()
    # Then Login is successful
    # And user is redirected to their dashboard
    And waitFor("{}Admin")	
    Then match driver.url == 'http://localhost:4200/sidebar'
    
    

Scenario: 2. Login without acount link verification

    # Given user is registered
    # And has not verified account
    # When I Login with valid credentials
    # Then Login is unsuccesful
    # And message prompting user to check email for verification link 
    # And an option to resend verification link is available






Scenario: 3 Login with invalid email

    # Given user is registered
    # And on the login page
    # When I enter an invalid email
    # And correct password credentials
    # Then Login is unsuccesful
    # And  an error message is displayed.

Scenario: 4 Login with incorrect password

    # Given user is on the sign up page
    # When I enter a valid username
    # And  incorrect password 
    # Then Login is unsuccesful
    # And  an error message is displayed.

Scenario: 4 Login with blank field

    # Given user is registered
    # And on the sign up page
    # When  mandatory field (email and password) is blank 
    # And click login button
    # Then Login is unsuccesful
    # And  an error message is displayed.




