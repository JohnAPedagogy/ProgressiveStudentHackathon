# Welcome to the 2021 Summer Progressive Student Manager Hackathon

## PSM Phase 1 - Introduction
The Progressive Student Manager (PSM) enables tutors, administrators and all student caretakers manage students in at a Foundation or Year 1 College level.  The phase one is a single user system design for a single tutor with the capability of handling multiple modules and the students taking those modules.

# Hackathon Tutorials
This are organised into the following sections
- Git
- Html
- CSS/Bootstrap
- Typescript
- Angular

## Git

## Markdown
It is the aim of this hackathon to add a `Readme.md` file in every folder of this project.  This readme will have a brief description of the purpose and contents of this folder.  The `Readme.md` file is written using markdown which adds formatting capabilities to ordinary text files such as the one you are reading right now.  Please follow the markdown guide in the link below when doing your own readme.md to document the folders you create.
### Useful Markdown links
- [Markdown guide](https://guides.github.com/features/mastering-markdown/)

# PSM Phase 2 - Hackathon
The phase 2 of the Progressive Student Manager (PSM) will consist of 2 sprints
- Sprint 1 will be the re-implementation of phase 1 with addition of an authentication system
- Sprint 2 will be development of a Student Dashboard

## Phase 2 - Technology Stack
- Team A
  - Java/H2/Mysql
  - Bootstrap
- Team B
  - MongoDB
  - Angular

### Java - Spring boot
We shall be using Java Spring boot for the back end end business-objects layer of our system.  Spring boot is designed with a Microservices architecture in mind.  This means that you will be able to add the components you need to your application as you need them.  Ideally, you would have separate projects for each component and treat them as individual applications to achieve a true microservice architecture.  However, in this hackathon, all components would be in a single monolithic application.

#### Java - Spring boot - Object Relational Mapping
We will be using the data component of Spring boot to encapsulate our data using the Repository design pattern.  The repository pattern abstracts the database responsibility of managing SQL into in-memory database objects that feels native to Java objects and collections.  Below is a tutorial on spring boot.  The github repository for the tutorial can be downloaded [here](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWZkVVZjRGszUjF1QzZ0VWpOWWIzWWN2Mm11QXxBQ3Jtc0tsWkpVaHBsanY4VjZKdkI4SGJQMzV4ZGlHZW9BMEVqZnlRM2pSN0RLNlBJZzN0WGlieTVNeERjYlJsc0g4WG9KdWVCalFuZUxwa2ZLdmdWVWkzbWNhQ1dLZWZPUWhTMXZWeFFaVUxRMzg2a1lCLWpyWQ&q=https%3A%2F%2Fgithub.com%2Fkriscfoster%2FSpring-Data-JPA-Relationships)

[![ORM Example](https://img.youtube.com/vi/f5bdUjEIbrg/0.jpg)](https://www.youtube.com/watch?v=f5bdUjEIbrg).

