<img src="assets/projectimg/howe_title.png" alt="HoweAboutPT.com" class="hero-image" />

# HoweAboutPT&#46;com

This was the first major project at Boldable. We began work in early 2017 and launched the site after about 6 months of development. Development continued over the end of 2017 as new requirements were discovered and UX improvements were made to make the site as professional of an experience as possible. Unfortunately, Amy Jo had to shut her business down in early 2019 and now the site only exists on the Internet Archive.

Source code can be found [here](https://github.com/LTSteve/ajhowe).

## Tooling

Languages: **HTML**, **Javascript**, **Node**, **CSS**
CSS Framework: [**Bootstrap**](https://getbootstrap.com/docs/3.4/)
Javascript Frameworks: [**KnockoutJS**](https://knockoutjs.com), [**Require**](https://requirejs.org)
Database: [**MongoDB**](https://www.mongodb.com)
Hosting: [**Digital Ocean**](https://www.digitalocean.com)

## Process

We started our process with some discovery time between the Product Owner (Amy Jo), Developer, and Designer to build out cards and get a better understanding of the scope and details of the project. This left us with some questions that we would need to answer with User Interviews and Prototyping, which was the next step. After that we returned to Amy Jo to finalize a plan for our first development sprint and it was off to the races.

We followed an Agile methodology during development. We broke our work down into two week sprints and presented the design and development progress to our Product Owner at the end of each sprint. We were also in nearly daily contact with Amy Jo, mainly for designs and feature specifics. This helped us iterate on our features with a good amount of input from Amy Jo leading us to discover misunderstandings quickly and efficiently.

One of these misunderstandings was harder to catch and persisted even up to launch. The issue was in the specifics of how we wanted clients to sign up for sessions. Our original design favored signing up for individual classes on a calendar, but Amy Jo preferred a 4 week set of courses instead. She had noticed in the past that she preferred clients that would commit to an entire month at once. Additionally, she was the only personal trainer working in her studio so session times were pretty limited and clients that were with her for years were having trouble signing up due to people signing up for individual classes. Eventually we removed the ability to sign up for individual classes entirely and gave Amy Jo the ability to add clients to courses manually, even over the initial attendee limit.

Iteration continued in this way for a couple of months after launch, eventually it slowed down to a trickle of minor bug fixes and the site was complete.

## Major Features

- A database to store user data, session data, and special deals
- A few Admin pages for Amy Jo to plan and edit her sessions (and eventually to sign some clients up manually)
- A calendar view for mobile and desktop allowing users to view Amy Jo's upcoming schedule and purchase a set of sessions including any class they see

## What Went Well

- The turn around time on bug fixes worked out great for the most part
- Iteration helped us out a lot as it highlighted misunderstandings earlier than if we had balled it all up and shipped it all at once

## What Didn't Go Well

- Lack of DB experience led to lack of backup features
- Not enough time in discovery phase
