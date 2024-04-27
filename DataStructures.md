# Data Structures

## Operations
Operations on a dynamic set can be grouped into two categories: queries, which
simply return information about the set, and modifying operations, which change
the set. Here is a list of typical operations. Any speciûc application will usually
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
       
      [10808번: 알파벳 개수](https://www.acmicpc.net/problem/10808)
    </details>

4) Comparative Analysis

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
