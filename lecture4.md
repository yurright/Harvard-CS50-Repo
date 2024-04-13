# Lecture 4: Memory

color code. 
RGB. 
hexadecimal
0x
used to express addresses in memory

& operator : get the address of a piece of data in memory
* operator (de-reference operator): go to specific address

```
printf("%p\n", &n);
```


## pointer
: a variable that contains the address of some value (an address)

```
//store the address of n in a variable
int n = 50;
int *p = &n; //because &n is an address, it's not int p, but int *p
```

*p meaning: p is going to be a pointer, p is going to be the address of an integer(in above example)


```
//store the address of n in a variable
int n = 50;
int *p = &n;
printf("%p\n", p);
```

now you can access the address in memory
-> able to build and construct things, and link together by knowing where they live

advantage of using pointer: create data structures in memory. (2d, 3d structure possible)

pointer p가 생성되는 순간, 그 정보도 메모리에 저장됨. 

img

-> pointer big: in most modern system, pointer is 8 bytes

pointer: a variable that points at something else(사실 그 주소값 자체에 큰 관심은 없으니까, technically는 그 주소값이 있지만)

실제로 중요한 것은 "**using p, I can get to the value n**"
img

double pointer: pointer that points pointer

a string is a sequence of characters, 
```
string s = "HI!"; //컴퓨터 관점에서 ""는 메모리 끝에 \0 붙이라는 의미 됨. char은 ''
```
img3 HI!

-> what is s?
컴퓨터가 어딘가에 HI!를 저장한 후 첫 char의 주소를 저장한 변수가 s (대애박......). s 단 하나의 값으로 스트링을 나타낼 수 있음
(\0로 끝나니까)
```
string s = "HI!"; 
printf("%s\n", s); // HI! 나오지만
printf("%p\n", s); // in C, string is actually ```char *``` !!!!!
```

```
typedef char *string;
```
there is no string keyword in C

---
그럼 * 사용해서 실제로 그 주소에 가도록 하는 건 어떻게 할까?

```
//store the address of n in a variable
int n = 50;
int *p = &n;
printf("%i\n", *p); // prints 50
//*p means go the the address stored in p! (de-refernce p)
```

* is used when you declare a pointer, and when you de-referecne p

---
와 시작 포인터 하나랑, 끝 \0 만으로 하나의 의미를 가진 스트링을 프린트해내는 함수를 만든 printf 에 사용된 논리 진짜 천재다
---
```
printf("%p\n", &s[0]);
printf("%p\n", &s[1]);
printf("%p\n", &s[2]); //주소가 연속되어있다는 것을 볼 수 있음
```
포인터로 연산도 가능하지 않을까?

## pointer arithmetic

```
printf("%c\n", *s);
printf("%c\n", *(s+1));
printf("%c\n", *(s+2)); 
```

ampersand, asterick
s[0]: syntactic "sugar"

```
printf("%c\n", *s);
printf("%c\n", *(s+1));
printf("%c\n", *(s+50000)); 
```

이런 장난 해보면, segmentation fault  에러 볼 수 있음.
컴퓨터는 memory 를 여러 segment 로 나눔. 근데 다른 세그먼트 건드리면 이렇게 에러 남. 
-> 해커 jump to other info 하는 데 사용하기도 함

이걸로 substring 도 출력해볼까?


```
printf("%s\n", s);
printf("%s\n", s+1);
printf("%s\n", s+2); 
```

