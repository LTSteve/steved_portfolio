
<img src="assets/projectimg/transplant_title.png" alt="Transplant" class="hero-image" />

# Transplant

Transplant is a procedural doom-like with rhythm elements built in 3 days during the Out Of Mana game jam.

You can download the game on [Itch.IO](https://steved.itch.io/transplant)
Up-to-date source code can be found [here](https://github.com/LTSteve/Transplant).

## Tooling

Engine: [**Unity**](https://unity.com)
Sound Effects: [**BFXR**](https://www.bfxr.net)
Soundtrack: [**Bitwig**](https://www.bitwig.com)
Art: [**GIMP**](https://www.gimp.org)

## Context

After years of partially complete prototypes I decided it was time I started working on actually finishing some projects.  The best way I came up with to do this was to put myself on a deadline by entering a game jam. In order to keep the scope down and not interfere with other obligations too much I was looking for a short term jam.

I chose a three-day long jam taking place over the weekend. The [Out Of Mana](https://itch.io/jam/out-of-mana-1) game jam was a smaller jam, but it fit the length I wanted and was coming up in just a few days. Shortly after entering the jam the theme and "side quests" were announced and it was off to the races.

- Theme: Heartbeat
- Side Quests
		- Use Rhythm
		- Sacrifice
		- Use Combat

## Process

(day one)

The first step was brainstorming, luckily the "Use Rhythm" theme was easy to conceptualize in relation to the "Heartbeat" theme. The "Use Combat" side quest was bound to happen no matter what.  I eventually landed on a rhythm-based doomlike with some rudimentary story connecting the main character's heartbeat to the rhythm element. I had a pretty good understanding of using 2d sprites in a 3d environment and knew I could make basic doom-style sprites.

Here are a few that I put together on the first day:

![Lab coat enemy](assets/projectimg/transplant_sprites1.png)
![Cultist enemy](assets/projectimg/transplant_sprites2.png)

To save on time, I chose to only make sprites for the fronts of the enemies. On the subject of time saving, I used the Dungeon Stone Textures for the environment (I think I bought it as part of a Humble Bundle at some point, but I can't find the asset store page right now).

Development-wise I started the first day fairly light with some basic movement, billboard sprite, and shooting controls.

(day two)

I started the second day by creating some more enemy designs:

![Crawler enemy](assets/projectimg/transplant_sprites3.png)
![Monstrous enemy](assets/projectimg/transplant_sprites4.png)

Now that I had most of my enemy sprites finished I was free to add some enemy logic and damage.

Finally, I spent the rest of day two working on the game's soundtrack. This isn't usually something that's time effective to make yourself in a game jam. I felt that the right track could really help connect the gameplay to the theme of the gamejam (also I just really wanted to include my own music in the game). Here's what I came up with:

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/777283630&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/heedlessnorseman" title="Steve D" target="_blank" style="color: #cccccc; text-decoration: none;">Steve D</a> · <a href="https://soundcloud.com/heedlessnorseman/transplant" title="Transplant" target="_blank" style="color: #cccccc; text-decoration: none;">Transplant</a></div>

(day three)

The final day of the game jam was bound to be busy. I needed to wrap up game assets, add a bit of a story, wrap up the game loop, and make any finishing touches before the deadline.

First off I finished the sprite for the final boss (you've seen it above, but here's the full sprite sheet):

![Boss](assets/projectimg/transplant_sprites5.png)

Here's a quick list of what all was added on day three:

 - Soundtrack added
 - Health UI and a game timer bar
 - Enemy and pla0yer sfx
 - Enemy hit vfx
 - Story text crawl
 - A basic settings screen to adjust screen shake and screen flash
 - Endless world generation (just a simple script that tiled about 5 premade tiles randomly as you traverse the world)
 - Fog (including a special enemy fogging script as optimizing volumetric lighting was out of scope)
 - Special enemy controller logic for the final boss
 - Game loop logic (ie. Opening, Spawning enemies over time, Ending the game when the player defeats the boss)

This was the point where I first submitted the project, the rest of what I wanted to add were nice-to-haves and I wanted to be sure I had something in before the deadline. Here are a few nice-to-haves that I ended up getting in before the deadline:

- Enemies leaving bodies when they die
- A loading screen
- Pause menu sfx
- A sensitivity slider
- A slowly increasing enemy cap

## What Went Well

- The game aesthetically feels pretty good
- I'm really happy with the sprite designs and soundtrack

## What Didn't Go Well

- The gameplay for sure lacks polish, I think there's an issue with bullet and enemy colliders that should be an easy fix, but I didn't spend enough time playtesting to find it
- The default sensitivity is way too high
- I'm not entirely convinced that I like shooters with rhythm elements

## What's Next

Since participating in this game jam a few games have come out that have done pretty well in this subgenre. I should check those out to see if there was anything they did differently that would fit into this game.
