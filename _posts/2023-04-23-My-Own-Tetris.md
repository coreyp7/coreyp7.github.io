---
layout: post
category: project
description: Everybody makes Tetris; this one's mine.
image_name: tetris_preview.png
github_link: https://github.com/coreyp7/sirtet
youtube_link: https://youtu.be/fWdjqzIpYWk?si=1vvHFnzFlW0i3CiJ
---

It feels like creating your own tetris is a sort of rite of passage as a game developer, and I thought it sounded like a fun project. I honestly didn't have a specific goal when developing this in a week, but ended up learning more about object oriented C++ stuff (polymorphism through pointers, abstraction). More broadly, I also learned more about source file organization (*because this source code is messy*) and game state-machines (for handling different modes/menus in games).

It's written in C++ with [SDL](https://www.libsdl.org/) (including [SDL_image](https://github.com/libsdl-org/SDL_image) and [SDL_ttf](https://github.com/libsdl-org/SDL_ttf)).

**I'm not providing a release because it's literally Tetris with a funny background, but here's a** [video](https://youtu.be/fWdjqzIpYWk) if you wanted to check it out.

## Features
- You can rotate clock-wise with 'P', and counter clock-wise with 'O'.
- You can instantly drop pieces by pressing 'W'.
- You can hold pieces by pressing 'H'.
- Player 'level' increases when you clear a certain amount of lines.
- Tetris Piece fall speed increases as your level increases.
- A gorgeous ambient background to accompany you while you play.

