# Registration/Authentication Module --> Role Configuration Epic
## Introduction
The authentication system will enable the user to authenticate securely and based on their role will allocate what the user sees and has access to.
![Authentication module](../auth.PNG)
<!-- ![Authentication module](../../karate/k01.PNG) -->
## Role Configuration

As an admin I want to set the assign role-based permissions to users of the system.  This will involve assigning permissions to all resources the users can access.  This resources are identified by links to components.

### Acceptance Criteria
1. The first user of the system automatically becomes admin
1. **A tutor can change status to HOD
**Only one HOD is allowed on the system (i.e 2. if a tutor has assigned HOD to self no other can reassign HOD status)
3. **An admin can assign roles to users
4. ***How would the system identify different departments
5. if a tutor is unregistered , can an admin assign a class [don't understand this question]
6. Admin assigns the classes for tutors [also for a different feature]

### Scenarios
1. Navigation and Resources can load sucessfully from the database.
1. An Admin can setup resources from the admin panel
1. An admin can assign resources to roles
1. The system can check/allow/block access to a resource requested by the user. [This will be done in a different feature]


