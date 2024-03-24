# Lecture 1: C
: Basics of a progamming language

## Basic Concepts of A Programming Language
- variables
- conditionals (if, else if, else)
- boolean expression
- functions: 1) return value 2) side effect
- abstraction: Abstraction is the art of simplifying our code such that it deals with smaller and smaller problems.
- argument
- statement
- loops (while, for, do while)
- operators
- comments
- types

## Finite Memory -> Count Limitation Problem
- 32 bits typically express integer
- which means biggest number possible is about 4 billion
- half is used for negative numbers, so you can express about -2b ~ 2b
- if it goes over that number, **integer overflow** occurs!

## How To Address Integer Overflow
- expand memory size -> long integer uses 64 bits

## Truncation Problem
- floating point value must be calculated with floats, not integers -> type casting
- imprecision occurs because of finite memory -> use double instead of floats(twice the memory like long-integer relationship)

## Supplemental study
- what does 1,2, mean in ASCII?
- make a game with Scratch

## VSC is a text editor that can also compile code and execute code
- syntax highlighting

## GUI, CUI
- gui:
- cui:

## $ in terminal
- means "type command here"

## Different Syntax in C, Python, JS
- printf
- ;
- ""
- escape sequence
- enter line
- import library (header file, )
- if you want to use return value, you need to assing it to a valuable
- in C, you need to assign data type for valuables
- %s in C: "%s", value to plug in
- conditionals(if / if, else / if, else if, else)
- for loop, while loop, do while loop(best for repeating until condition met, python does not have do while loop)
- operators
- comments(// )
- void keyword
- return keyword
- c reads down. initializaiton at top needed for functions defined beneath;


## Conventions in C
- space after if
- brackets in new line
```
else if
{
}
```
- in js,
```
else if {
}
```
- indent 4 spaces (technically indention is not needed)
- for, while : start counter at 0, < n,

## Linux and Command Line
- ls
- mv
- cd
- rm
- mkdir
