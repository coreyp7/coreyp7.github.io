---
layout: default
category: project
description: A small demo of an implementation of SAT collision of any convex polygons.
---

### [video link](https://youtu.be/TX0AjeiljTw?si=xjHYhMu6p5JKCcFl)

[ ![preview3](/assets/images/projects/sat_preview.gif){:class="img-responsive"} ](https://youtu.be/TX0AjeiljTw?si=xjHYhMu6p5JKCcFl)

I wanted to implement more sophistocated collision detection after just resorting to AABB stuff in previous projects up until this point. SAT is a common one to learn for convex polygons, and is very visually satisfying to get working.

In the demo you can control multiple polygons and rotate them. The shapes change color depending on their collision status.

I think this is a good exercise for people who want to be less scared of vector math. The usage of the dot product helps a new developer understand some more intricate use cases for it in a game you'd want. Up until this point I've learned these things not exactly understanding a situation I'd implement it in, but SAT helped with that for me.