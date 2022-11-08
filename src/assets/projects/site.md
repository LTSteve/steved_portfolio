<img src="assets/projectimg/site_title.png" alt="This very site" class="hero-image" />

# This Very Site!

As you can see by looking at my development history on this portfolio it has been around six years (at the time of writing) since I was employed in Software Development. I believe I've learned and grown a lot in this time, but that's hard to get across with resumes and stories alone. Thus the need for this site!

This was actually my first full project in Typescript, and my first in Angular (though I had some light experience in AngularJS). I also attempted a TDD workflow for almost everything which I would not normally do for a solo-dev project of this scale. A few weeks and a handful of road bumps later, here we are!

Source code can be found [here](https://github.com/LTSteve/steved_portfolio).

## Tooling

Languages: **HTML**, **Typescript**, **CSS**
CSS Framework: [**Bootstrap**](https://getbootstrap.com/docs/3.4/)
Typescript Framework: [**Angular**](https://angular.io)
Hosting: [**Netlify**](https://www.netlify.com)

## Process

The process of this project will likely focus primarily on the early stages of development. Understandably, gaining familiarity with a new framework requires these early stages to develop fairly slowly.

The core concept for this portfolio was to make it as project focused as possible. Utility was important here. A site this simple would have taken me only a couple of days with raw HTML + Javascript, so I decided to also showcase a few things that are new to me like Typescript, Angular, and Jasmine.

I decided on Netlify for hosting mainly based on price and ease of use. After a bit of poking around in the dark I found [a straightforward guide](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-and-angular/) to configure a Netlify Angular project. After linking my new project to a Github repo development could truly begin.

The first thing I did was follow part of [an Angular TDD guide](https://www.youtube.com/watch?v=JOYNHkRN_YY&t=1077s) I found in order to build some context and understanding around how the rest of the project would go. The trickiest part of using TDD in this situation was not having a complete understanding of Angular itself getting in the way of what and how testing even fit in. Specifically, testing routing-related features took a little while to wrap my head around.

For managing project data I decided on a basic JSON file for the list of projects with project articles written in Markdown. In the future I may move this to a MongoDB database somewhere. The downside is that whenever I add a new project to this portfolio I'll have to push a new commit to Github, this would be a big problem in a bigger site with multiple devs and content writers. For now, the JSON + Markdown solution fits well enough.

    {
      "title":"This Very Site",
      "type":"Dev",
      "shortDescription":"A journey in getting acquainted with Angular and a real trip down memory lane.",
      "date":"10/18/2022",
      "articleName":"site",
      "imagePath":"assets/projectimg/site.png",
      "state":"In Progress"
    }


## Major Features

- Project cards and filtering
- Markup -> Portfolio articles (I used [marked](https://www.npmjs.com/package/marked) for the .md file parsing)

## What Went Well

- Articles are easy to access and read fitting in well with my original plan for the portfolio
- The ability to share a link to the pre-filtered project list means I can use this site both for a personal project list and as a professional portfolio

## What Didn't Go Well

- I developed the site in a desktop-first orientation. Mobile first development tends to be preferred as it's easier to extend a mobile UI to fit a desktop format. Of course, if there was a design for the site before development started it would also solve the problem.
- The site is no-frills which means it's easy to interact with, but it also means it's a little boring

## Whats Next

- Hosting projects on a server somewhere
- Running the design by some more people
- Continuing on to add more project articles
