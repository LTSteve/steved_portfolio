
<img src="assets/projectimg/chillplanet3.png" alt="Chill little planet" class="hero-image" />

# Chill Planets

Chill Planets is a prototype that showcases a method of procedural generation using multidimensional Perlin Noise. This project was influenced by [a series by Sebastian Lague](https://www.youtube.com/playlist?list=PLFt_AvWsXl0cONs3T0By4puYy6GM22ko8) on generating planets procedurally.

Up-to-date source code can be found [here](https://github.com/LTSteve/ChillPlanets).

## Tooling

Engine: [**Unity**](https://unity.com)

## Context

I have always been fascinated with procedural generation and space, so Sebastian Lague's series was stuck in the back of my mind immediately upon first viewing. Shortly afterwards while playing [Outer Wilds](https://en.wikipedia.org/wiki/Outer_Wilds), an adventure game taking place on some adorable little planets, I was reminded of the planet generation series. I decided going through this series and using it to help me generate chill little planets would be an enriching and enjoyable project.

## Process

This project was always intended to be a mere prototype. As such, I didn't spend much time on project planning. The goals of the project were fairly clear to me from the start: Generate some cool little planets, Experiment a bit with color schemes, Finally throw in a player controller to mess around with the generation.

I started by essentially following the series up to the point where I had a fully generated little planet, this is where my project mainly branched off. I chose to separate the multidimensional noise generation code into a reusable library for myself (in case I ever want to use this type of generation in a project in the future). I also chose to use Perlin Noise over the Simplex Noise from the example. To be honest, I don't remember my reasoning here.

Here's a rapid-fire list the different things I experimented with in this project:

- Building out an N-dimensional data structure to more easily interface with multidimensional noise generation.
- Placing 'water' on some planets. This was mainly achieved by placing another generated noise sphere in the same space as the planet with it's size equating to the planet's sea level. For this second sphere I used a transparent material and much less vertical difference than was used to generate the 'land' of each planet.
- Using an additional dimension to allow water to loop a sort of procedural animation over time. This ended up being very computationally intensive, so the water on any one planet only updates every once in a while.
<img src="assets/projectimg/chillplanet.gif" alt="Planet water simulation" />
- A gravity and booster system to control a player among the generated planets. Mainly for getting nice screenshots.
- A looping system that keeps the planets within a certain distance of the player.
- I experimented with star generation, but never landed on a satisfying solution.
- Finally, I cranked up the number of planets generated to see about how many my computer could take.
<iframe width="560" height="315" src="https://www.youtube.com/embed/dyhFp_m2aRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What Went Well

I'd say overall, the planets look pretty neat.
<img src="assets/projectimg/chillplanet1.png" alt="Chill little planets" />

## What Didn't Go Well

I meant to offload the bulk of the planet generation computation on to the GPU (using something in **Unity** called *Compute Shaders*), but I never got around to it and lost interest in the project before attempting this. Luckily I got the chance to experiment with Compute Shaders in future projects.

## What's Next

For this project, not much. At least I have the n-dimensional Perlin Noise generation in my back pocket and may find some creative ways to utilize it in the future.
