# Lecture 4: Memory

color code. 
RGB. 
hexadecimal
0x
used to express addresses in memory

## &, * operator

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

즉, a string is just a sequence of characters identified by its first byte.

스트링 비교 == 안 되는 것도 왜 그런지 생각해볼까?
-> 첫 자의 주소값 비교가 되니까 ㅋㅋㅋ

** 컴파일러는 +1 할 때 하나의 int 가 4 byte 인 점 감안할 수 있음. ->??? 정말?? 확인해보고 싶넹**

```
//둘 비교
if(s == t)
if(*s == *t && *(s+1) == *(t+1))
```

## how can we leverage this to solve other problems?

copy string
```
string s;
string t = s;
```
이렇게 하면, 주소가 복사돼서 완전 같은 메모리의 값이 되네!!
img


mistakes happen often when the user gives you input that you did not expect!


copy by reference, copy by value: 지금은 copy by value 임-> copy by reference 궁금


## malloc, free function
malloc: memory allocation: use to ask the operations system for some number of bytes in advance, returns the first byte of that memory they found for you. 근데 \0 없기 때문에 메모리 얼마나 요청했는지 개발자가 기억하고 잇어야 함


free: does the opposite. I'm done with this chunk.

computer freeze: program 짰는데, 계속 malloc 으로 메모리 요청하고 free 는 안 해서 결국 메모리 없어져서 펑!

```
char *s;
char *t = malloc(strlen(s) +1); // t is pointer for some randome chunk of free space

for (int i=0; i < strlen(s) + 1; i++) // 이 코드 최적화는 아님. 계속 strlen 함수 루프마다 부르니까. 위에서 한 번 불러서 값 가져오는 게 낫다!!!!
{
  t[i] = s[i];
}

free(t); // malloc으로 메모리 할당했다면 반드시 끝내줘야 함!! free 하면 이제 다른 곳에서 이 메모리 사용할 수 있게 됨

```
이러면 스트링의 모든 값을 다른 메모리 공간에 복사해옴

----
**"공간을 확보한 후 값을 넣는 논리" 자주 사용되는 구조!!** 값을 저장하고 싶으면 무조건 자리부터 만드는 사고 장착해!
**코드 최적화 방법 중 하나: 루프마다 반복적으로 불필요하게 부르는 함수 있는가?? 있다면 루프 전에 한 번만 불러서 값 가져와!**
---

NUL : \0
NULL : address 0

""latent bugs""

## valgrind

debug program: let into code and find memory errors

memory loss: memory leak

----
allocate space, initialize value, print
---
garbage values in memory : initialize 안 하면 남아있던 쓰레기가 나올 수 있다!! 신기하다

---



