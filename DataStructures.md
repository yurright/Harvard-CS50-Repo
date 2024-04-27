# Data Structures

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
