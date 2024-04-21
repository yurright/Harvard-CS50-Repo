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

## Arguments and Statements, What's the Difference?
### Arguments

**Arguments are the actual values or data that you pass to a function or method when it is called.** These values are used by the function to perform operations or calculations. Arguments are also known as "actual parameters" because they represent the actual data provided to functions at runtime.
For example, in a function call like sum(5, 10), the numbers 5 and 10 are the arguments. They are the specific values passed to the function sum to perform addition.
### Statements

On the other hand, statements are the **individual instructions or commands** in a programming language that perform a specific action. A statement could be a function call, a variable declaration, an assignment, a control flow construct (like if-else or loops), or any other instruction that tells the computer to perform something.
For example, int x = 5; is a statement that declares a variable x and assigns it the value 5. Similarly, if (x > 0) { return x; } is a conditional statement that checks if x is greater than zero and returns x if the condition is true.
### Bottom Line
Arguments are the values passed to functions to be processed, while statements are the lines of code that make up the instructions in a program. Understanding the difference between these two is crucial for writing clear and effective code.


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
