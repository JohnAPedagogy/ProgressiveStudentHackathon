Feature:
# Repository Pattern
The goal of the repository pattern is to abstract the data layer of your application into a collection of reusable objects.

The class diagram for the repository pattern is as follows
![Repository pattern class diagram](classdgm.png)

As a user of the repository I should be able to do the following
1. get() a single record from the entity
1. getAll() the records from the entity
1. add() a record to the entity
1. addRange() a set of records to the entity
1. remove() a record from the entity
1. removeRange():  Remove a set of records from the entity
1. find(): Find records based on a criterion
1. serverFun(): Execute server function to return records from the entity or a scalar value