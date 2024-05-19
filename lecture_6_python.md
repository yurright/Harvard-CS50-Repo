# Lecture 6 Python

how to learn a new language

python: interpreter lang

no semi colon no \n (new line default)

using libraries: 

import 000library

from 000library import 000function

000.py

run a program called python, whose purpose is to interpret .py

python 000.py

functions in python:

dynamically typed.

concatenate auto, 

print space between default

f strings: print(f"hello, {answer}")

data type: bool, float, int, str, range, list, tuple, dict, set

def func(arg):
  ...

python slower (tradeoff: )

python 
import face_recognition

대박!!

conditionals

{} 대신 indentation!, elif

variables

define declare
answer = 0

change variable
answer = answer + 1
answer += 1
(++ 없음)

loops

for loop 좀 다름
```
for i in [0, 1, 2]:
  print("hello, world")
```

```
for i in range(3):
  print("hello, world")
```

range uses less memory

python does not have array


type casting conversion

interpolate

소수점 정확도 높이는 방법

floating-point imprecision

integer overflow 없음, 표시에는 한계 잇음

|| 대신 or
&& 대신 and

"" '' 똑같은 의미

keyword in

특정 데이터 타입에 built in functionality 있으면 더 편하게겠다. 

-> **Object Oriented Programming**
: Where certain types of values (data type) (aka str) not only have properties inside of them, your data can also have functions built into them!!!!


cf. C (non object-oriented) 
: you have structs, and structs can only store data like name. number

in python class, you can not only store data likde name, number, you can have function like call that person, actual verbs or actions associated with that piece of data

method: a function that is built into a piece of data


데이터 타입을 새로 형성할 때, property 같은 데이터 뿐만 아니라 function도 만들어줄 수 있을 때 객체 지향 프로그래밍!!!!

so instead of lower(s)
you can use the built in function as s.lower()

**python: strings in python are immutable! cannot be changed.** : 메모리상

ex. 
```
s = s.lower()
```
: 
returns a copy of s, forced to lowercase
doesn't change the original string, 
that is, the bytes in the computer's memory
when you assing it back to s, you're essentially
forgetting about the old version of s,
but because Python does memory management for you
there's no malloc, there's no free,
Pyhton automatically frees up the original bytes, 
and hands them back to the operating system for you.



docs.python.org

how to build own function
keyword def



python hoisting 안 되네 (hoisting 여부)

convention is to make main function
: you do not need prototypes!

```
def main():
  for i in range(3):
    meow()

def meow():
  print("meow")
```

in python you do not need prototypes, no copying and pasting return type, name, arguments to a function

but still, you have to call main()

```
def main():
  for i in range(3):
    meow()

def meow():
  print("meow")

main()
```
main function 구조 활용 중요하네!

python loop: for, while 있지만 do while 없음

사용자 무언가 제대로 할 때까지 시키고 싶을 때:
do while: only use while but
```
while True:
  사용자에게 무언가 시키고
  만족 조건 break
```
-> pythonic

variable scope 이 유연

```
def get_height():
  while True:
    n = get_int("Height: :)
    if n > 0:
      break
  return n
```

convention: def 사이 두 줄 띔

python input은 언제나 스트링으로 받음

error handling
try except ValueError, else:
```
def get_height():
  while True:
    try:
      n = get_int("Height: :)
      if n > 0:
        return n
    except ValueError:
      print("not an integer") //doesn't crash. 
```
-> pythonic

default overwrite 하기 (선택적 argument 수정할 수 있나 보기)


```
print("?" * 4)
```
가능.

python doesnt have malloc, free, pointers


python은 리스트 길이가 동적이기 때문에
```
scores = []
```
같은 empty list 의 용도가 매우다양

list.append

concat of list도 가능
```
scores =+ [score]
```


f"{}" // 스트링 속 변수 interpolate 하는 방법

sys module: command line input functionality

```
from sys import argv

for i in range(len(argv)):
  print(argv[i])
```

**iterate list**
```
for arg in argv:
  print(arg)
```
slice list
```
for arg in argv[1:]:
  pring(arg)
```

using fuction of imported library
```
import library

library.function
```

sys.exit(0) : exit code of program

cli: echo $? 로 볼 수 있음

keyword in : python takes care of **linear search**

```
people = {}
people = dict()

people = {
"Carter": "1923892",
"Davide": "2349843",
}

name = input("Name: ")
if name in people:
  print(f"Number: {people[name]}")
```
파이썬으로 굉장히 간단하네

파이썬 dict : 솔리디티 map // hash table들임!!

**compare strings**

자동 지원


**언어별 비교 예제1**
```
s = input("s: ")

t = s.capitalize()

print(f"s: {s}")
print(f"t: {t}")
``
**하면 s는 변경 안 되고 남아있고, t는 s값 복사해서 cap한 값 됨. 이거 언어별로 차이 비교!!!**
C는 s도 바뀜


**언어별 비교 예제2 swap**
```
x = 1
y = 2

print(f"x is {x}, y is {y}")
x, y = y, x
print(f"x is {x}, y is {y}")
``
와 이거 언어별로 헷갈리는데 매우 중요, 변수에 값 담는 것 관련해서 활용이 계속 되는 부분이라!!!!

file CSV 로 저장하기
```
import CSV

file = open("phonebook.csv", "a") //append mode

name = input("Name: ")
number = input("Number: ")

writer = csv.writer(file)

writer.writerow([name, number])

file.close()
```

```
import CSV

with open("phonebook.csv", "a") as file:

  name = input("Name: ")
  number = input("Number: ")

  writer = csv.writer(file)
  writer.writerow([name, number])
```
하면 close 안 해도 됨 자동으로 닫아줌

```
import CSV

with open("phonebook.csv", "a") as file:

  name = input("Name: ")
  number = input("Number: ")

  writer = csv.DictWriter(file, fieldnames=["name", "number"])
  writer.writerow({"name": name, "number": number})
```
column order 상관없이 첫 줄에 따라 어디에 값 넣어야할지 알아서 넣어줌

library pyttsx3
와 구글api 복잡하게 안 써도 임포트 만으로 쓸 수 있네 미쳤다

import qrcode
와 라이브러리 만으로 큐알코드까지 만들 수 있다. 미쳤다 파이썬

----
questios:
prototypes in C

face recognition 사용해보기

variable scope python은 없어? 1:19 : 전역변수 같은 개념은 있는데,
여기서의 맥락은
기준은 def. while이 아니라 def 안에서는 다 통용됨 def 기준. global 로 전역 변수로 만들어줄 수 있음. 

call main() 잘 사용되는지

python도 받는 데이터 형식으로 JSON 많이 사용해? CSV? 다 정보. 

python은 데이터 처리 특화된 함수가 많이 내장되어있네.
라이브러리도 많고

keyword in 너무 좋다. js도 있낭?

echo $? 은 js에 있낭?

---
