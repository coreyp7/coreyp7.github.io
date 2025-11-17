---
layout: post
category: project
description: A compiler for the 'plank' language. Written to learn Rust.
github-link: https://github.com/coreyp7/compiler-in-Rust
permalink: rust-compiler
language: rust
---
<h6>If you'd like a straight readme, go to the github link. This post goes into more detail
about the project, implementation, lessons learned, etc.</h6>

I did this project with 3 goals in mind:
- Understand more about compilers; fundamental structure, basic implementation, variations, etc.
- Learn Rust; I thought a compiler project would force me to learn alot about the language.
- Have fun, enjoy myself.

I managed to do all three, but am moving on. Its easy to get carried away adding things I want 
in my language without actually learning anything new. 

<h3>Basic project overview:</h3>
1. Lexer
2. Create function symbol map
3. Build AST
4. Resolve expression types / semantic analysis <em>(yes this is done in the same step)</em>
5. Generate c code
6. Compile into exe

- If an error is found in Parsing, it returns parser specific errors and doesn't bother with semantic analysis.
- If it fails semantic analysis, it returns an error message with information (and line number information).

<b>Some fun pitfalls I had:</b>
- Naive ownership workarounds that ended up stifling my program from having anything new added to it.
Even in my final implementation, I know that things are messy and inconsistent in how it manages ownership.
- Rust really requires you to write everything perfect first time. This entirely clashed with the purpose 
of learning quickly about compilers and playing around, because everything took so much refinement before 
I could run it at all.
- I did a rewrite of my code because I was fitting everything into the ast builder which was 
such a mess. When writing your first language, be as pedantic as possible about what each 
module of code is doing, and have it do one straightforward job. I know that 
single responsibility is common sense as a programmer, but its easy to push off best practices
when you're excited about something and want to keep going.

<b>Learned:</b>
- Basics of Rust. I'm confident in writing basic code, understanding more complex topics, and 
am comfortable moving forward to learn more language features as I write future projects.
- Specifically, I'm much more confident in understanding ownership semantics in Rust. Future projects will 
be more organized as I'm much more familiar in how Rust wants me to organize my data.
- Know compiler basics up to code generation. I compile into C with little code generation code. 
I know that writing a compiler in the future will include more complicated language features 
due to experience with it here.
- The importance of establishing a grammar for your language before doing anything. Maybe this 
is partly to do with working in Rust, but its quite difficult to modify your grammar on the fly 
in a personal project with a priority on learning.

<b>My recommendations:</b>
- Finalize your grammar before doing anything. As long as its well thought out, you won't need 
to make changes to it and will be able to just do the work.
- I didn't use a book to do this, and it was pretty fun that way. Do what you want.
