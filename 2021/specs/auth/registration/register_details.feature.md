# Registration and Authentication Module --> Registration --> User Details
The authentication system will enable the user to authenticate securely and based on their role will allocate resources to the as per what the user sees and has access to.
![Authentication module](registration.png)
## Introduction

The registration epic allows the user to create a login for the Progressive Student Management.  This epic has the following features:

1. Registration Details
1. Validatoin
1. Registration Success
1. Email Activation
1. User Activation

As a user I want to register on the platform so I can access the platform


### Acceptance Critera

1. email and password and password confirmation fields are mandatory
2. user is allowed one account per email (i.e a user cannot use one email to register multiple accounts)
3. All users are registered as tutors by default
4. Password and confirmation password field must be masked

1. ![Authentication module](registration_use_case.png)

## A. Enter Details
As A user I would like to enter my details to register

### Acceptance Critera
The fields would include
1. User email
1. Password
3. Repeat Password
