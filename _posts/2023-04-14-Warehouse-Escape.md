---
layout: post
category: project
description: A video game about a shipping box trying to escape its warehouse as fast as possible.
github-link: https://github.com/coreyp7/Warehouse-Escape
youtube-link: https://www.youtube.com/embed/NnFjYvj1s3Q
language: C++
---

**A video game about a shipping box escaping its warehouse.**

It's written in C++ with [SDL](https://www.libsdl.org/) (including [SDL_image](https://github.com/libsdl-org/SDL_image), [SDL_mixer](https://github.com/libsdl-org/SDL_mixer), and [SDL_ttf](https://github.com/libsdl-org/SDL_ttf)).

### [YouTube video of gameplay footage](https://youtu.be/NnFjYvj1s3Q)

## Intro
This was my first project using SDL2 for game development. I wanted to make something simple to learn some basics of setting up your own engine for the game you want to make. Some stuff like:
- implementing vsync on your own
- simulating basic physics and motion based off of time, keeping delta time yourself
- rendering things intentionally and rendering relative to a camera position
- AABB collision/resolution that suits my game
- got to mess around with adding audio for fun

## Controls/Gameplay
The further from the center of the box you click, the more force you'll apply to it. Once you play it, you'll get a better feel on how to maneuver it and will get better at it every run.

You can also restart the game quickly by pressing r.

There's two timers at the top of the window that will keep track of two things:

 - The RTA time for completing the entire game (5 levels)
 - The IL time for the *current level only*

These will make it a lot easier for you to see how much better you get at getting the box to where you want it to go.
