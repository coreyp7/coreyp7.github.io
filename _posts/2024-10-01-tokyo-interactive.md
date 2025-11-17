---
layout: interactive-destination
title: "Japan"
date: 2024-10-01
category: travel
destination: "Japan"  
photo_dir_name: "japan"
---

<!-- 
All the divs are generated in interactive-destination.js file.
It gets the list of photos (and their default positions when loaded)
from the photo-mappings file (using the photo_dir_name as the key) and 
adds them as elements to this document.

Anything below will be specific to this page (text, background image, etc.)
-->


I wrote my first programming lanugage (compiler) so I could learn Rust. <br>
The language is named *plank*.
If you'd like to use this wonderful language, feel free. 
```
/! Here's an example Plank program.
/! It prints hello 25 times; then plank afterwards.
Number i: 0
while i < 25 then
    print "hello, "
    update i <= i + 1
endWhile
print "plank"
```

## Requirements
- Rust
- gcc
- run in a bash shell

## Install Instructions
1. Clone the repo
2. Run `./compile.sh --setup` <br>
*This will create an example program in your directory and compile it into an executable to ensure that setup is successful.* <br>

Further info is found in the github readme.

## An Uncouth Programming Language "Specification"
```
/! Here's how you comment your code.

/! Declaring a variable.
Number num: 14
Number another: 1

/! Assigning to a variable.
update num <= 26

/! If conditional branch
if num > another then
    /! Here's how to print to console.
    print "wow! num is greater than that other variable"
endIf

/! Here's an example while loop
while num >= another do
    update another <= another + 1
    if num > another then
        print "still smaller"
    endIf
endWhile

print "now greater!"
```

## Other remarks
Would like to further research how programming languages work and create some sort of guide or resource for people that they could start from.

But as is, there are still things missing here I'd like to work on. For example, this doesn't even use an AST (Abstract Syntax Tree) when parsing, it basically parses/validates/emits to c code all in the same file, so error messages are basically non-existant.

