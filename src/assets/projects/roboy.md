
<img src="assets/projectimg/roboy_title.png" alt="Roboy: Robot Janitor" class="hero-image mobile-hero" />

# Roboy: Robot Janitor

**Roboy: Robot Janitor** is an arcade-y, physics-y mobile game. You control the titular Roboy as he traverses orbital space to keep it clean by collecting junk.

Up-to-date source code can be found [here](https://github.com/LTSteve/orbital-cleanup).

## Tooling

Engine: [**Unity**](https://unity.com)
Sound Effects: [**BFXR**](https://www.bfxr.net)
Soundtrack: [**Bitwig**](https://www.bitwig.com)
Art: [**Procreate**](https://procreate.art/ipad) with touchups in [**GIMP**](https://www.gimp.org)

## Context

The core idea for **Roboy: Robot Janitor** had been knocking around in my head for years. I have to credit the main thrust of my fascination with orbital dynamics to **Kerbal Space Program**, an excellent indie game where you build rockets, buggies, and other contraptions and do your best to launch them into space (and to other worlds in the solar system).

In fact, years ago I spent some time on what could be considered a prototype for **RRJ**. The main concepts are present in this prototype, but my comfort wasn't quite there yet with **Unity**, and I never ended up turning this prototype into a full game at the time.

What really convinced me to spin this old prototype into a full game was a desire to build a game with a quick turn around time. I already had a pretty good idea of the work that would have to go in and the experience with the previous project helped me design the level creation tools that I needed with minimal wasted effort. As it turns out *prototypes are very useful*, who woulda known.

To align with my goal of a quick turn around, I focused pretty early on a fairly restrictive feature list.

- **Orbits**: Earth, Mars, Glorp
- **Objects**: Scrap, Fuel, Bombs
- **Other Features**: Basic UI, Player thrust controls, Gravity, Orbit prediction display

## Process

Development started pretty smoothly. Player movement, 2-Body gravity, some rudimentary animations, and more were all implemented fairly quickly. Other features took some more effort, let's cover a few of those.

![Quite a few orbits](assets/projectimg/roboy_orbits.png)

**Rendering Orbits** was the first major feature I didn't have much experience in (this feature was not in the old prototype). The process of drawing an ellipse using the *LineRenderer* **Unity** component is fairly simple. Pick a point as the 'center', and loop through some number of angles using *some function* to determine how far away a line drawn at that angle intersects your ideal ellipse (here's a diagram).

![orbit calculation diagram](assets/projectimg/roboy_diagram.png)

However, *some function* is doing a lot of work here, and it took a few hours of studying  [Celestial Mechanics (by Jeremy Tatum)](https://phys.libretexts.org/Bookshelves/Astronomy__Cosmology/Celestial_Mechanics_%28Tatum%29) to fully grasp how this function would work. Here's that function from the code if your curious.

    public static Orbit FromPositionVelocity(
      Vector2 planetPosition, Vector2 position, Vector2 velocity,
      float planetMassRatio, Orbit orbitToUpdate = null)

    {

      position = position - planetPosition;

      var radius = position.magnitude;
      var positionAngle = Vector2.SignedAngle(Vector2.right, position);
      var speed = velocity.magnitude;
      var velocityAngle = Vector2.SignedAngle(Vector2.right, velocity);
      var semimajoraxis = 1f / ((2f / radius) -
          (speed * speed / planetMassRatio));
      var period = Mathf.Pow(semimajoraxis, 3f / 2f);
      var angularMomentum = radius * speed *
          Mathf.Sin((velocityAngle - positionAngle) * Mathf.Deg2Rad);
      var eccentricity = Mathf.Sqrt(1f -
          (Mathf.Pow(angularMomentum, 2f) / (semimajoraxis * planetMassRatio)));

      var orbitalAngleEq =
          (semimajoraxis * (1f - Mathf.Pow(eccentricity, 2f)) - radius) /
          (radius * eccentricity);

      var positionAngleMinusOrbitalAngle =
          Mathf.Acos(Mathf.Clamp(orbitalAngleEq, -1f, 1f)) * Mathf.Rad2Deg;
      var positionAngleMinusOrbitalAngle2 =
          360f - positionAngleMinusOrbitalAngle;

      var tangentVelocitySlope = velocity.y / velocity.x;

      var le = eccentricity * (1 - Mathf.Pow(eccentricity, 2f)) * semimajoraxis;

      var angularVelocitySlope = le *
          Mathf.Sin(positionAngleMinusOrbitalAngle * Mathf.Deg2Rad) /
          Mathf.Pow(1 +
              eccentricity *
              Mathf.Cos(positionAngleMinusOrbitalAngle *
              Mathf.Deg2Rad), 2f);
      var angularVelocitySlope2 = le *
          Mathf.Sin(positionAngleMinusOrbitalAngle2 * Mathf.Deg2Rad) /
          Mathf.Pow(1 +
              eccentricity *
              Mathf.Cos(positionAngleMinusOrbitalAngle2 * Mathf.Deg2Rad), 2f);

      var velocitySlopeToCompare = (Mathf.Tan(positionAngle * Mathf.Deg2Rad) *
          angularVelocitySlope + radius) /
          (angularVelocitySlope - radius *
              Mathf.Tan(positionAngle * Mathf.Deg2Rad));
      var velocitySlopeToCompare2 = (Mathf.Tan(positionAngle * Mathf.Deg2Rad) *
          angularVelocitySlope2 + radius) /
          (angularVelocitySlope2 - radius *
              Mathf.Tan(positionAngle * Mathf.Deg2Rad));

      var slope1Diff = Mathf.Abs(tangentVelocitySlope - velocitySlopeToCompare);
      var slope2Diff = Mathf.Abs(tangentVelocitySlope - velocitySlopeToCompare2);

      //pick whichever is closer

      positionAngleMinusOrbitalAngle = (slope1Diff < slope2Diff ?
        positionAngleMinusOrbitalAngle :
        positionAngleMinusOrbitalAngle2);

      var orbitalAngle = positionAngle - positionAngleMinusOrbitalAngle;

      var tangle = (positionAngle - orbitalAngle) * Mathf.Deg2Rad;

      var E = Mathf.Acos((eccentricity + Mathf.Cos(tangle)) /
              (1 + eccentricity * Mathf.Cos(tangle))) * Mathf.Rad2Deg;

      var E2 = 360f - E;

      //align to positive angles

      while (E < 0) E += 360f;

      while (E2 < 0) E2 += 360f;

      while (positionAngleMinusOrbitalAngle < 0)
          positionAngleMinusOrbitalAngle += 360f;

      E = E % 360f;

      E2 = E2 % 360f;

      positionAngleMinusOrbitalAngle = positionAngleMinusOrbitalAngle % 360f;

      if (positionAngleMinusOrbitalAngle < 180f && E > 180f)
      {
        E = E2;
      }
      else if (positionAngleMinusOrbitalAngle > 180f && E < 180f)
      {
        E = E2;
      }

      var M = ((E * Mathf.Deg2Rad) - eccentricity *
              Mathf.Sin(E * Mathf.Deg2Rad)) * Mathf.Rad2Deg;

      var T = -M * Mathf.Deg2Rad * period / (2 * Mathf.PI);

      if(orbitToUpdate != null)
      {
        orbitToUpdate.CenterPosition = planetPosition;
        orbitToUpdate.semimajoraxis = semimajoraxis;
        orbitToUpdate.eccentricity = eccentricity;
        orbitToUpdate.orbitalangle = orbitalAngle;
        orbitToUpdate.timeofperihelion = T;

        return orbitToUpdate;
      }
      else
      {
        return new Orbit(planetPosition, semimajoraxis, eccentricity,
            orbitalAngle, T, angularMomentum <= 0);
      }

    }

**"What happens when the player collides with the planet they're orbiting?"**  The next issue was less of a headscratcher but instead an issue of finding the solution that best fit how I wanted the game to feel. The two main options were to explode and reset the level (a more punishing option, and the direction I took in the original prototype), or to have the player simply collide with the surface. Neither of these felt great, and as an extra issue when the player collided with the surface they'd usually get stuck, after all:

    Force of gravity = Gravitational Constant x (Mass 1 x Mass 2) / Distance Squared

The force of gravity scales exponentially with the inverse of the distance to the center of the object you're orbiting. This meant in order for Roboy to have enough thrust force to go from surface to a basic orbit, he'd have to have way too much thrust to control well once he got there.
The solution I landed on here was to make a small area just around each planet where gravity just stopped effecting the player. This helps keep up the pace of play as you're far more likely to 'bounce off' of the planet than get stuck on it, and it gives plenty of leeway to build up speed and break into orbit (which is where the game shines). My head canon is that Roboy is actually skipping off the atmosphere in these moments, but the truth may never be known.

Towards the end of development I had nearly reached a feature-complete project, only to discover that **more variety was needed**. The levels I was creating were becoming repetitive and, honestly, I was running out of ideas. That's where the aliens came in. If the last orbital body was to be Gloop (*the name changed during development*), an alien planet, I should have an alien space ship as well. There isn't much drama around this one, the peaceful fun-loving aliens would never try to blow you up, instead they would help you out with their ~~barrels~~ gravity cannons. *This mechanic was fun in **Donkey Kong***.

With that, all that was left to do was slap in some ads and wrangle with the release process on the Google Play store.

## What Went Well

- The sprites turned out quite well and the theming was pretty consistent
- The level creation tools that were developed early in the project made designing and testing levels a breeze
- Development went smoothly enough to add a couple of nice to have features including the aliens and a rudimentary dialogue system

## What Didn't Go Well

- The control scheme is pretty frustrating to use, if I ever allot myself some time to add to this project, a new control scheme is the first thing on the list
- The camera is fairly consistently zoomed out too far to see satisfying detail and too close to have a full picture of where everything is. I solved a lot of issues by making it dynamically zoom to follow the player. Rendering the orbits of all objects on screen also helps gather the necessary info. Unfortunately I think dealing with orbital mechanics in 2d will always run into these issues.
- Overall, the presentation of the game is a bit unprofessional. In the case of the art this was largely intentional, however more could still be done in terms of UI and the Google Play page.

## What's Next

I would love to (after fixing the controls and porting it to other systems) see how the game plays in a procedurally generated "endless mode". I have also toyed around with the idea of adding other unlockable characters with different mechanics. Unfortunately, I'm not likely to come back to **Roboy: Robot Janitor** any time soon, so for now it will just remain a quirky little game tucked away on the Google Play store.
