# Lecture 2: Arrays

# Source Code, Machine Code, Compiler

source code -> compiler -> machine code

# Compiler for C
- make hello is an automated compiler that includes clang compiler
- when you compile, a new "file" is created
- that "file" is a.out: assembly output file
- add command line arguments (that modify the output)
- -o: "output" change output
- -lcs50: add libraries

# Compiling in C has 4 steps:
1. preprocessing : add contents from header files(files with #)
2. compiling : translates preprocessed code to assembly code
3. assembling: translates assebmly code to machine code
4. linking: combines machine code of my code and header file code

# header file
- .h file has only the shape of definition, .c file has the real definition (like solidity )

# How to Debug
1. use printf
2. use debugger:shows each step of the execution and how memory changes
3. use rubber duck and talk it out

# data type
- bool, int, string etc. each data type has specific number of bits allocated
- in C,
- bool: 1 byte
- int: 4 bytes
- long: 8 bytes
- float: 4 bytes
- double: 8 bytes
- char: 1 byte
- string: ? byes

# type casting

# Array
-can save similar data into one variable, not 3 different variables
- uses contiguous memory
- easy to fix
- cannot get the size of an array in C
- but can get the size of string (because of \0(null)) (does javascript work the same way??)
- string is an array of char, strings are just chars, chars are just numbers
- 자바스크립트에서도 스트링을 숫자로 읽을 수 있나?

# Questions
 - but can get the size of string (because of \0(null)) (does javascript work the same way??)
 - how can javascript get the length of strings and array? why is it different?
