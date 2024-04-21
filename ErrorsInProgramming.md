# Potential Errors in Programming that is Discussed

## Integer Overflow (Lecture 1)
### Reason of Error:
- 32 bits typically express integer
### Error:
- biggest number possible is about 4 billion
- half is used for negative numbers, so you can express about -2b ~ 2b
- if it goes over that number, integer overflow occurs!
### Solution:
expand memory size -> long integer uses 64 bits

<details>
  
<summary>Understanding Integer Overflow</summary>
  
### Definition and Mechanism
Integer overflow occurs when an arithmetic operation attempts to create a numeric value that exceeds the range that can be represented with a given number of bits allocated to the number in a computer system[1][2]. This typically happens because modern computers use fixed-size data structures (like 32-bit or 64-bit integers) to store numbers. When the result of an operation exceeds the maximum value the data type can hold, it wraps around to the minimum value of the data type and continues from there, a behavior known as wrapping or modulo operation[1][2][3].

### Causes and Examples
The most common cause of integer overflow is operations like addition, subtraction, or multiplication that exceed the data type's maximum capacity. For example, if an 8-bit unsigned integer, which can store values from 0 to 255, is incremented at 255, it wraps around to 0[1]. This behavior can lead to unexpected results or system vulnerabilities if not properly managed.

A notable real-world example of integer overflow was the Ariane 5 rocket crash, where an integer overflow in the rocket's guidance system's software caused the destruction of the rocket shortly after lift-off[1].

### Risks and Consequences
Integer overflows can lead to various types of software errors and vulnerabilities. They can cause program crashes or unexpected behavior, and in some cases, they can be exploited for malicious purposes such as buffer overflow attacks, which can lead to unauthorized code execution[3][5][6]. For instance, an integer overflow in buffer size calculation could allocate smaller memory than needed, leading to buffer overflow when more data is written than the buffer can hold[3][5].

### Prevention and Handling
To prevent integer overflows, developers can use several techniques:
- **Type Checking and Safe Libraries**: Using programming languages or libraries that provide built-in protection against integer overflows. For example, languages like Python handle integers more flexibly by automatically expanding the number size as needed[6].
- **Input Validation**: Ensuring that before performing arithmetic operations, the inputs are checked to see if they would cause an overflow[1][3].
- **Defensive Programming**: Implementing checks before operations to ensure that they do not exceed the data type's limits[1][3].

### Programming Language Specifics
The behavior of integer overflows can vary between programming languages:
- **C and C++**: Unsigned integer overflows wrap around consistently due to the standards of these languages. However, signed integer overflow is considered undefined behavior, meaning anything might occur, from crashes to incorrect program operations[12][15].
- **Java and .NET**: These environments typically handle integer overflows by throwing exceptions if the overflow is not explicitly handled by the programmer[2][3].

### Conclusion
Integer overflow is a critical concept in computer science, particularly in the context of software development and cybersecurity. Understanding its mechanisms, implications, and prevention strategies is essential for developing secure and robust applications. Proper management of integer overflows is crucial to prevent potential security risks and ensure the stability of software systems.

Citations:
[1] https://nordvpn.com/cybersecurity/glossary/integer-overflow/
[2] https://en.wikipedia.org/wiki/Integer_overflow
[3] https://www.acunetix.com/blog/web-security-zone/what-is-integer-overflow/
[4] https://www.scaler.com/topics/c/overflow-and-underflow-in-c/
[5] https://www.invicti.com/learn/integer-overflow/
[6] https://www.comparitech.com/blog/information-security/integer-overflow-attack/
[7] https://www.linkedin.com/pulse/integer-overflows-underflows-08-solidity-smart-contracts-olympix
[8] https://rosettacode.org/wiki/Integer_overflow
[9] https://www.linkedin.com/pulse/integer-overflow-underflow-stephen-ajayi
[10] https://www.invicti.com/blog/web-security/integer-overflow-errors/
[11] https://www.welivesecurity.com/2022/02/21/integer-overflow-how-it-occur-can-be-prevented/
[12] https://stackoverflow.com/questions/18195715/why-is-unsigned-integer-overflow-defined-behavior-but-signed-integer-overflow-is
[13] https://cwe.mitre.org/data/definitions/190.html
[14] https://www.infosecinstitute.com/resources/secure-coding/what-is-is-integer-overflow-and-underflow/
[15] https://www.gnu.org/software/autoconf/manual/autoconf-2.63/html_node/Integer-Overflow-Basics.html
</details>


## Truncation Problem (Lecture 1)
floating point value must be calculated with floats, not integers -> type casting
imprecision occurs because of finite memory -> use double instead of floats(twice the memory like long-integer relationship)
