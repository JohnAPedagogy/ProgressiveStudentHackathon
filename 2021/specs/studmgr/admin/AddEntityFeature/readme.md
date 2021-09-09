# Student Manager Module -> Admin Epic -> Add Entity Super Scenario (sub-feature)
## Introduction

The admin is used by user's with the admin role. This page is used to interact with the database. The add super feature has the following sub-features

1. Enter entity information
1. Assign a unique ID to the new entity
1. Display an error in the UI if the data is incorrect 

<!-- ![Admin ResourceRole Activity](admin_ResourceRole_activity.png) -->

## Sub-Features and API Design

1. Add a Entity  --> [post] /dashboard/admin/Entity
## Sub Features
### A. Enter entity information

As a user with the admin role, I should be able to specify the new entity's information 

#### Acceptance Criteria (Rules)

1.The added entity item should be seen in the database with the correct information

### B. Assign a unique ID to the new entity

Once an entity is created, a unique ID has to be given to the entity

#### Acceptance Criteria (Rules)

1. The entity's ID is unique in the table (No two entities have the same ID)

### C. Display an error in the UI if the data is incorrect 

The UI should display an error if the data being entered is wrong

#### Acceptance Criteria (Rules)
1. An error message is displayed on the screen if the data is wrong
1. The message displays which aatribute has the wrong information 

