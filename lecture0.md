# Lecture 0: Scratch
: Computational Problem Solving Mindset

## Unary, Binary, Decimal

- unary, base-1
- binary, base-2 : used by computer through** transistors**
- decimal, base-10

## Bit, Byte

- 1 bit = 0 or 1
- 1 byte = 8 bit
- 1 kilobyte(KB) = 1,024 bytes
- 1 megabyte(MB) = 1,024 KB

- 1 byte can express 256 diferent numbers (0 to 255)

## Then How Can You Express Letters?
- map numbers to letters -> ASCII
- in ASCII code, 65 means A

## Then How Do Differentiate 65 and A?

- map numbers to other numbers 
- in ASCII, 1 is expressed in computers as 49

## ASCII uses 7 bits (8bits), Then How Can You Express more languages like Korean or emojis?

- add digits! that is, add bytes!
- ASCII -> Unicode
- unicode is a mapping too, but has more bytes(32 bytes), to express all kinds of human language
- 32 bytes is quite a lot, hence a lot of extra space, so they made emojis
- emojis use combinations of emojis to express diverse emojis

## How Can A Computer Know When To Interpret 65 as a Number, or Letter?

- use datatypes to determine
- datatypes are "agreements" of mappings
- midi, mp3 are different ways to express audio into data


## Abstraction
- the simplification of something

## Algorithm
- step by step instruction for solving problems
- when you use different algorithms to solve problems, the time needed can vary -> efficiency can vary

## Computational Problem Solving
- Define problem
- define desired input and output
- use abstraction and express the solution into verbs, for "functions" or "pseudo code", (write as comments//), start with high-level solution
- if you use abstractions, you don't have to understand the underlying mechanisms everytime you need to do something and can just execute
- crack the function into smaller problems, or smaller algorithms

## Source Code and Machine Code
- source code is the code the person wrote
- computers cannot understand source code
- computer can only understand machine code
- a compiler is the algorithm that modifies source code to machine code

## Criteria for Good Code
- correctness (does it do what it needs to do)
- good design (
  - faster,
  - maintenance,
  - does it repeat code?,
    - use loop
  - low probability of mistakes)
    - use variables for repeated things
    - use const to make certain variables unchangeable
- style (readable aesthetics, indention)
