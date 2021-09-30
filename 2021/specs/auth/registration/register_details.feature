Feature:
  # Registration and Authentication Module --> Registration Epic --> User Details features
  The authentication system will enable the user to authenticate securely and based on their role will allocate resources to the as per what the user sees and has access to.

  ![Authentication module](registration.png)

  ## Introduction

  The registration epic allows the user to create a login for the Progressive Student Management.  This epic has the following features:

  1. Registration Details
  1. Validation
  1. Registration Success
  1. Email Activation
  1. User Activation


  ### Acceptance Critera

  1. email and password and password confirmation fields are mandatory
  2. user is allowed one account per email (i.e a user cannot use one email to register multiple accounts)
  3. All users are registered as tutors by default
  4. Password and confirmation password field must be masked

  ![Authentication module](registration_use_case.png)

  # Registration Details feature
  As a potential user I want to enter my details on the register page so that I can subsequently get a log on to access the areas of the platform.

  ## Acceptance Critera
  The fields would include
  1. User email
  1. Password
  3. Repeat Password

  ## Scenarios
  1. There is a link to 'Register' an account on the home page.
  2. The user can open the 'Register' page from the home page.
  3. The user can enter his 'user email', 'password' and 'repeat password'

Scenario:   1. There is a link to 'Register' an account on the home page.
  # This is an example of a positive test
  Given I am on the home page
  Then I should see the Link for Registration

Scenario:   4. There is a link to 'Register' an account on the home page.
  # This is an example of a negative test
  Given I am on the home page
  When I click on all the links/buttons on the page
  Then I should see the dashboard page

Scenario:   5. There is a link to 'Register' an account on the home page.
  # Another an example of a negative test
  Given I am on the home page
  When I click on all the links/buttons on the page
  Then only the Register button should open the Registration page

  