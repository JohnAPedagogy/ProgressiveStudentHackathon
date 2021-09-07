# Student Manager -> Admin Epic -> ResourceRole Entity Super Scenario (sub-feature)
## Introduction

The admin is used by user's with the admin role. This page is used to interact with the database.  This super feature has the following sub-features
1. Select ResourceRoles to view all ResourceRoles
1. Add a ResourceRole Entity
2. Remove a ResourceRole Entity
1. Modify a ResourceRole entity
1. View all ResourceRole entities

![Admin ResourceRole Activity](admin_ResourceRole_activity.png)

## ResourceRole Fields
1. ID  --> Int
2. ResourceId --> String
3. ResourceRoleUrl --> String
4. ResourceRoleCategory --> Enum (Int)

## Sub-Features and API Design
These features listed above have the following API ResourceRoles
1. Add a ResourceRole  --> [post] /dashboard/admin/ResourceRole
2. Remove a Reource --> [delete] /dashboard/admin/ResourceRole
3. Modify a ResourceRole [patch] /dashboard/admin/ResourceRole
4. View all ResourceRoles --> [get] /dashboard/admin/ResourceRole

## Sub Features
### A. Add a ResourceRole entity feature 

As a user with the admin role, I should be able to add different instances of an entity to the database

#### Acceptance Criteria (Rules)

1.The added ResourceRole item should be seen in the database

### B. Remove a ResourceRole Entity

As a user with the admin role, I should be able to modify different instances of an entity to the database

#### Acceptance Criteria (Rules)

1. the removed ResourceRole should no longer be in the database

### C. Modify a ResourceRole Entity
As a user with the admin role, I should be able to remove different instances of an entity to the database

#### Acceptance Criteria (Rules)

1. The original and modified ResourceRole from the database should differ in at least a field

### D. View all ResourceRole Entities

There will be a side bar with an admin dropdown (expandable) showing all the entities 
#### Acceptance Criteria (Rules)
1. It is possible to get a list of collections (entities) from the database directly
1. This will be a server-side functions that you can get from the repository implementation
1. If you select ResourceRole from the side bar, the list of all ResourceRole entities should be displayed in the screen
1. Should be able to sort
1. Should be able to filter
1. Should be able to modify pagination
1. Should be able to create new entity from page
1. Should be able to edit/delete entity from view
1. Select multiple records to delete

