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
