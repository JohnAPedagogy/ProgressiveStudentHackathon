# Student Manager -> Admin
## Introduction

The admin is used by users to interact with entities managed by the database. 

![Admin module](admin.PNG)

This module has the following epics

# A. Add entity feature 

As a user, I should be able to add different instances of an entity to the database

## Acceptance Criteria (Rules)

1. The entity being added needs to be inserted into the database
2. The table where the entity belongs is determined by the UI
2. The user needs to enter the entity's information
3. If the information entered is invalid, the program should not add the entity
4. A unique ID is assigned to the new entity

## Scenearios

1. The information is invalid 
2. The information is valid and the new entity is created

# B. Remove entity feature 

As a user with the admin role, I should be able to remove an entity from the database

## Acceptance Criteria (Rules)

1. The user needs to specify the table where the entity belongs and the entities unique ID (Implied from UI)
2. If the ID doesn't match any entity on the table, then the program should display an error
3. If the ID is found, the entity should be removed from the table

## Scenearios

1. The ID doesn't match any entity
2. The ID matches an entity on the table and the entity is removed


# C. Change entity feature 

As a user with the admin role, I should be able to change the an entity's data

## Acceptance Criteria (Rules)

1. The user needs to specify the table where the entity belongs, the entities unique ID and the data being updated
2. If the ID doesn't match any entity on the table, then the program should display an error
3. If new information is invalid, the program should display an error
4. If there are no errors, the data on the specified entity is updated 

## Scenearios

1. The ID doesn't match any entity on the table
2. The data being added is invalid
3. The data and the ID are valid, the entity's infomation is updated

# D. View entity feature 

As a user with the admin role, I should be able to see the entities on the database. I should also be able to specify what information I want to see.

## Acceptance Criteria (Rules)

1. The user needs to specify the table where the entity belongs and the entity's unique ID
2. The user can specify what information it wants to see from the entity 
3. If the ID doesn't match any entity on the table, then the program should display an error
4. If the information being retrieved is not related to the specified entity, the program should display an error 
4. If there are no errors, the entity's specified data is shown to the user 

## Scenearios

1. The ID doesn't match any entity on the table
2. The data being requested is invalid
3. The data and the ID are valid, the entity's specified infomation is shown

# E. Data exchange feature 

As a user with the admin role, I should be able to export and import data from and to the database

## Acceptance Criteria (Rules)

1. The user can upload students to the database



