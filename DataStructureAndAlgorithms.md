# Data Structures

The best way to implement a dynamic set depends upon the operations that you need to support. 

## Operations
Operations on a dynamic set can be grouped into two categories: **queries**, which
simply return information about the set, and **modifying operations**, which change
the set. Here is a list of typical operations. Any specific application will usually
require only a few of these to be implemented. 

- **Search**(S, k): A query that, given a set S and a key value k, returns a pointer x to an element
in S such that x.key D k, or NIL if no such element belongs to S.
- **Insert**(S, x): A modifying operation that adds the element pointed to by x to the set S. We
usually assume that any attributes in element x needed by the set implementation have already been initialized. 
- **Delete**(S, x): A modifying operation that, given a pointer x to an element in the set S, removes x from S. (Note that this operation takes a pointer to an element x, not
a key value.) 
- **Minimum**(S) and **Maximum**(S): Queries on a totally ordered set S that return a pointer to the element of S with
the smallest (for MINIMUM) or largest (for MAXIMUM) key. 
- **Successor**(S, x):A query that, given an element x whose key is from a totally ordered set S,
returns a pointer to the next larger element in S, or NIL if x is the maximum
element. 
- **Predecessor**(S, x): A query that, given an element x whose key is from a totally ordered set S,
returns a pointer to the next smaller element in S, or NIL if x is the minimum
element. 
  

## Arrays
1) Understanding Fundamental Concepts
   
    <details>
    <summary>Definition</summary>
    
    - Arrays are linear data structures that store elements of the same data type in contiguous memory locations. They allow random access to     elements, which means any element can be accessed directly if its index is known
    </details>

    <details>
    <summary>Properties</summary>

    - Arrays have a fixed size, which means the number of elements they can store is defined when they are created. This makes them static
    </details>

2) Practicing Coding
    <details>
    <summary>Implementation Code in JS</summary>
       
      ```
      class Array {
          static int idx = 3;
          static int num = 6;
          static int[] arr = new int[10];
      
          public static void main(String[] args) {
              for (int i = 0; i < arr.length - 1; i++) {
                  arr[i] = i;
              }
      
              check(); // 초기화 상태
      				//0 1 2 3 4 5 6 7 8 0  
      
              insert();
              check(); // 임의의 위치 추가 상태
      				//0 1 2 6 3 4 5 6 7 8
      
              delete();
              check(); // 임의의 위치 삭제 상태
      				//0 1 2 3 4 5 6 7 8 0
          }
      
          static void check() {
              for (int x : arr) {
                  System.out.print(x + " ");
              }
              System.out.println();
          }
      
          static void insert() {
              for (int i = arr.length - 1; i >= idx; i--) {
                  int tmp = arr[i - 1];
                  arr[i] = tmp;
              }
              arr[idx] = num;
          }
      
          static void delete() {
              for (int i = idx; i < arr.length - 1; i++) {
                  int tmp = arr[i + 1];
                  arr[i] = tmp;
              }
              arr[arr.length - 1] = 0;
          }
      }
      ```
    </details>

3) Exploring Real World Applications
    <details>
    <summary>Examples</summary>
       
      [BaekJun 10808번: 알파벳 개수](https://www.acmicpc.net/problem/10808)

      [BaekJun 10818번: 최소, 최대](https://sukvvon.tistory.com/84)

      [leetcode: Two Sum](https://leetcode.com/problems/two-sum/description/)
    </details>

5) Comparative Analysis

- memory allocation
- access times: O(1)에 k번째 원소를 확인 가능
- operations like insertion and deletion
   - insertion:
   - deletion:
   -     

## Linked List

1) Understanding Fundamental Concepts

   <details>
   <summary>Definition</summary>

   - A linked list is also a linear data structure, but unlike arrays, its elements (known as nodes) are not stored in contiguous memory locations. Each node contains the data and a reference (or link) to the next node in the sequence
   </details>

   <details>
   <summary>Properties</summary>

   - Linked lists are dynamic, meaning they can grow and shrink in size as needed during runtime. They allow for efficient insertions and deletions because these operations do not require the elements to be contiguous
   </details>

2) Practicing Coding

3) Exploring Real World Applications
       <details>
    <summary>Examples</summary>

      [leetcode: Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)
    </details>

```
class Node {
  int data
  Node next
}
```
![linked list and tree](https://github.com/yurright/Harvard-CS50-Repo/blob/main/resources/tree-linked-list.png)



## Stacks (analogy: Stack of Pancakes)
[reference youtube: CSDojo](https://www.youtube.com/watch?v=A3ZUpyrnCbM )

-data 불러오기: 가장 위의 것만 가능
- how to implement: using array (1 pointer: end of qeue)
- js: array and pop() and push()
-  (O(1))

- empty stack을 어레이로 만들어놓고 넣고 빼며 사용할 수 있네


## Queues (analogy: people in line)
[reference youtube: CSDojo](https://www.youtube.com/watch?v=A3ZUpyrnCbM )

- how to implement: using array (2 pointers: front of queue, after last of queue, pointer: index 나타내는 variable)
- 앞이 것이 나가는 건: 첫 번째 포인터 한 칸 뒤로, 뒤에 추가되는 것도 포인터 한 칸 뒤로 하고 어레이에 넣어주고, 너무 길어지지 않아? 어레이 길이 고정한 후 circular array로 길이 넘어가면 다시 0으로 포인터 오게 이어주면 됨 근데 이 경우 길이 n 어레이에 n-1개의 데이터만 저장 가능! (이걸 막기 위해 어디까지 가능한지 알기 위해 마지막 포인터를 마지막 한 칸 뒤에 가리키게 만들었네!(두 포인터 같으면 빈 큐 되니까. 대박)
- functions: dequeue / enqueue (O(1))
  

## Deque(pronounced as deck) (Double Ended Queue)
[reference youtube: CSDojo](https://www.youtube.com/watch?v=A3ZUpyrnCbM )
양쪽에서 디큐 가능 큐 가능
-how implement: similar to queue. use circular array 2 pointer
- functions: addLeft / removeLeft(popLeft) / addRight / removeRight  (O(1))

## "([])(){}(())()()" 같은 스트링 주어졌을 때 brackets balanced면 true 반환하는 프로그램 만들어봐라! 재밌네
[reference youtube: CSDojo](https://www.youtube.com/watch?v=A3ZUpyrnCbM )


## Tree
- reference: [CSDojo](https://www.youtube.com/watch?v=1-l_UOFi1Xw&list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H&index=9)
- def: a structure where nodes are connected to each other, and there is a way(and only one way) to go from the root node to every other node in the structure"
- similar to linked list, but in linked lists each node can only be linked to one other node, in a tree **a node can be linked to multiple nodes**
- root node: node without parent
- no two references that head to the same node!!! image below is **NOT A TREE**!:
![not a tree](https://github.com/yurright/Harvard-CS50-Repo/blob/main/resources/not-a-tree.png)

```
class Node {
  int data
  Node child1
  Node child2
  Node child3
}
```

ex. express following tree in code:
![tree example](https://github.com/yurright/Harvard-CS50-Repo/blob/main/resources/tree.png)

## Binary Tree
- tree but each node has 2 children
```
class Node {
  int data
  Node left
  Node right
}
```
![binary tree](https://github.com/yurright/Harvard-CS50-Repo/blob/main/resources/binary-tree.png)

ex. find_sum(root) (O(n))
: use recursion(1) define base case, 2)given one root, express the sum of current root using sum of root )
find O: 
first find number of times the function is called: number of node * 2
second: each time function called, how much time to execute? -> O(1)

### References
[JS Algorithms Github](https://github.com/trekhleb/javascript-algorithms)

