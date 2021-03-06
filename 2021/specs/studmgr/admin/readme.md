# Student Manager -> Admin Epic
## Introduction

The admin is used by user's with the admin role. This page is used to interact with the database.  This epic has the following features
1. Add Entity
2. Remove Entity
1. Modify entity
1. View all entities
5. Select entity to view
1. Data Exchange

![Authentication module](./admin.png)
![Authentication module use case](./admin_usecase.png)

## Sub-Features and API Design

1. Add a Entity  --> [post] /dashboard/admin/Entity
1. Delete a Entity  --> [delete] /dashboard/admin/Entity
1. View a Entity  --> [get] /dashboard/admin/Entity
1. Modify a Entity  --> [patch] /dashboard/admin/Entity


## A. Add entity feature 

As a user with the admin role, I should be able to add different instances of an entity to the database

### Acceptance Criteria (Rules)

1. 

## B. Remove Entity

As a user with the admin role, I should be able to modify different instances of an entity to the database

### Acceptance Criteria (Rules)

1. 

## C. Modify Entity
As a user with the admin role, I should be able to remove different instances of an entity to the database
### Acceptance Criteria (Rules)

1. 

## D. View all Entities

This view shows a configurable list of all the records of a particular entity.

### Acceptance Criteria (Rules)

1. Should be able to sort
1. Should be able to filter
1. Should be able to modify pagination
1. Should be able to create new entity from page
1. Should be able to edit/delete entity from view
1. Select multiple records to delete


## E. Select Entity to view from a list of all entities

There will be a side bar with an admin dropdown (expandable) showing all the entities 


### Acceptance Criteria (Rules)

1. It is possible to get a list of collections (entities) from the database directly
1. This will be a server-side functions that you can get from the repository implementation
1. 

## F. Data Exchange
As a user with the admin role, I should be able to remove import student list into the persons table from a csv file.
### Acceptance Criteria (Rules)

1. 
