# Lecture 5: Data Structures

## Queues
-ex. queue line
-FIFO (First In First Out): fairness

-todo list

- two operations(functions): enqueue (add to end), dequeue (first served)


## Stack
- ex. stack of trays
- LIFO (Last in First Out)
- ex. gmail inbox
- side effect: 옛날 거 접근 잘 안 됨
- two operations: push(push on top), pop (pop from top)
-capacity: how high it could be, size: how high it is right now
-capacity too high tradeoff: can be wasteful

## Array
-data stored back to back
-[3]을 [4]로 이동하기 : grow the array (4짜리 메모리 찾아서 복붙) 
하는 해결법의 문제점: 
-또 옮겨야 할 수 있음
-비효율적 (같은 일 반복하게 됨)

-> 새로운 4를 넣을 곳 하나만 찾자(1,2,3,4가 아니라), 그리고 포인트해서 엮자
```
int list[3];

list[0] = 1;
list[1] = 2;
list[2] = 3;

for (int i=0; i< 3; i++)
{
  printf("%i\n", i);
}
```
-> 4로 늘릴 수 있는 확장성 떨어짐

want to allocate memory dynamically: malloc

```
int *list = malloc(3 * sizeof(int));

if (list == NULL)
{
return 1;
}

list[0] = 1; //(*list = 1)
list[1] = 2;
list[2] = 3;

int *tmp = realloc(list, 4 * sizeof(int)); //list 하면 NULL 확인 시 memory leak 발생. 이를 확인하기 위해 tmp 도입
if (tmp = NULL) //malloc은 더 이상 메모리가 없을 때 NULL 반환함
{
  free(list)
  return 1;
}
list = tmp;

list[3] = 4;

for(int i=0; i<3; i++)
{
  printf("%i\n", list[i]);
}

free(list);
return 0;
```
-> realloc 으로 동적으로 변수 관리할 수 있게 됨

## struct . operator, * operator -> operator

## linked lists
전체 옮기는 대신 연결하기
-data 와 포인터 있는 metadata => node (container to store value)
img (singly linked list)
질문 이해 못함 list 이름은 저장 안 된다고

와 블록체인 이해랑 진짜 긴밀하다.

```typedef struct node
{
  int number;
  struct node *next;
}
node;
```
tradeoff: 
-more memory(pointer 8bytes 니까 3배 됨)
-can't index into it list[] 안 됨 이건 contiguous 한 것만 가능
-binary search 안 됨 -> problem

```
(*n).number = 1;
n->number = 1;
```
img 
-> 와 블록체인 만들 수 있네 linked list네

iterating 이 이런 거구나!

running time of searching linked list: O(n)
to insert: O(1)-prepend, O(n)-append, O(n)-sorted

여기에 binary search까지 확보할 수 있을까?
-> 2D로 확장 -> tree

## tree

### binary search tree
img
array를 tree로 만들면, 
-> binary search 가능해짐

linked list가 1차원이라면
binary search tree 2차원


search에 recursion 사용

근데 tradeoff로 메모리 많이 사용.

binary search tree는 트리 중에서 큰 순서대로 정리한 트리

balanced binary search tree / unbalanced binary tree

## dictionaries
key: use to find
value: what you find
O(1)

## hashing
taking as input some value, outputing a simpler value

## hash tables -> 뭐야?

combine linked lists

dictionary + linked list
key를 a~z로 만드는 대신, aa~zz로 만들 수 있음. 딕셔너리 안의 딕셔너리 하는 대신. -> instant search time
-> downside: wasteful

search hash table O(n) ~~ O(n/k)

## tries

truly constant time
"retrieval"
-tri is a tree, each of whose nodes is an array
running time to search trie O(1): time only dependent on length of input
tradeoff는 big memory


---
질문
## hash tables -> 뭐야?
## trie 추가 공부
