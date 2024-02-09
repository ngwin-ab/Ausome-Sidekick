## Problem Statement 
Ausome Sidekick is a behavior tracking mobile app that helps parents, teachers or caregivers in recording the behaviors of children and students in order to build effective intervention and care. 

Many families with autistic children are unable to receive professional therapies due to financial constraints or lengthy waitlists at therapy centers. Meanwhile, "the impairments in communication and reciprocal social interaction from ASD can impact on relationships with family members, augment stress and frustration, and contribute to behaviors that can be described as challenging." Parents in these situations frequently feel frantic and powerless because they want to help their child but don't know what's causing these behaviors, many of which occur repeatedly. Also numerous teachers reported understanding and managing behaviors as one of the challenges they have encounterd when creating an inclusive environment with autistic students. 

Ausome Sidekick app was created with the hope of providing parents and teachers who are unable to access professional treatments with a convenient "supplement tool" to assist them better understand the function and purpose of challenging behaviors. In the long term, it is always recommended to seek for help from a qualified professional. Data collected and exported to excel files via this app can be used when discussing about the child/student with therapists or Special Ed teachers. It's always easier to come up with therapy plans or strategies when you have data.

The backbone of Ausome Tracker app is the ABC chart. ABC is an acronym for Antecedents, Behaviors and Consequences. "For example: Data collected on a child’s tantrum behavior may reveal that the antecedent is always his mother telling him to do something (clean his room, sit at the table for dinner, etc.) and that the consequence of this tantrum is often that he doesn’t end up doing what he was told. These data would suggest that a possible function of the child’s tantrum behavior is to escape his mother’s demands." Based on these data and conclusions, caregivers can draw a Behavioral reduction plan to "provide appropriate consequences or withhold unsuitable consequences for challenging behaviors, as well as teach appropriate alternatives to engaging in those behaviors. Replacement behaviors may include appropriate requesting, how to access attention appropriately, or how to appropriately communicate wants and/or needs."

## MVP Feature Set

1. As a new user I can sign up for a new account.
2. As a new user I will be introduced to the app via a tutorial.
3. As a user, I can log in/ log out. 
4. Full CRUD operations: 
	- I can add a new child/ student whose behaviors I need to keep track of.
	- I can click on child/student's name to see their tracked ABC tables.
	- I can log new ABC charts via forms, save these forms to a database and export to exel files. (The input fields show previous inputs to save typing time.)
	- I can update and leave comments in logged ABC tables.
	- I can delete unwanted data.
5.  I can share data via email.	

## Learning Goals
* Learn Mobile application Development Lifecycle (planning, designing, 
   developing, testing and deployment)
* Learn new framework (React Native)
* Learn to process and export data

### Potential Additional Features

1.  Convert the logged charts to graphs
2.  Invite family members to join the child's profile and record ABC charts for the child. 
3.  Search for books about autism, autism interventions 
4.  Search for intervention and therapy guidance videos for specific behaviors on Youtube
5.  I can search for therapy centers, resources and support organizations based on my zipcode.
6.  I will get to re-watch the tutorial shown when I first signed up in a seperate tab.
7.  I will get reminders throughout the day about not focusing only on challenging behaviors, but also need to chart positive behaviors that I want to increase.  

## Draft Technology Choices

- Front-end: React Native 
- Back-end: Node.js (I feel more comfortable working with Python Flask, but using Node.js means I don't have to switch languages between front-end and back-end. I'll do more research on this.)
- Database: I'm debating btw MariaDB vs PostgreSQL (Based on what I read, MariaDB is more suitable for smaller scale database vs PostgreSQL).
- APIs: Google Map API, Google book API, Youtube API
- Deployment Technologies: 
	- Deployed to iPhone and Android
	- Backend on Google Firebase

- I'm aware of the steep learning curve for mobile development and React Native particularly. However, here are a few reasons that make me want to pursue this path:
  - The purpose of the app is to make recording ABC charts more convenient vs using notes and pens, the users can use the app to record anytime, anywhere even when offline (which I think is hard for a web app?)
  - I want this Capstone Project to become a real app that will be published on app stores and reach as many users as possible (which means it should run on both Android and iOS).
  - I want to use this for my resume to showcase my ability of learning new technology and skills sets. 
