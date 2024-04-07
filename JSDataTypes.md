# Data Types in Javascript
There are 8 types of Data Types in Javascript

## 1 Null
- null 값은 오로지 null 값만 포함하는 별도의 자료형을 만듭니다.
- 자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다.
- 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '널 포인터(null pointer)'를 나타낼 때 사용합니다.
- 하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
```
let age = null;
```

## 2 Undefined
- undefined 값도 null 값처럼 자신만의 자료형을 형성합니다.
- undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
- 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.
- 하지만 이렇게 undefined를 직접 할당하는 걸 권장하진 않습니다.
- 변수가 ‘비어있거나’ ‘알 수 없는’ 상태라는 걸 나타내려면 null을 사용하세요. undefined는 값이 할당되지 않은 변수의 초기값을 위해 예약어로 남겨둡시다.
```
let age;  alert(age); // 'undefined'가 출력됩니다.
```

## 3 Boolean
- 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형입니다.
- 불린값은 비교 결과를 저장할 때도 사용됩니다.
```
let isGreater = 4 > 1;  alert( isGreater );
```
```
let nameFieldChecked = true;
```

## 4 Number
- 숫자형(number type) 은 정수 및 부동소수점 숫자(floating point number)를 나타냅니다.
- 숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN같은 '특수 숫자 값(special numeric value)'이 포함됩니다.
- NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값입니다. 부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중에 에러가 발생하는데, 이때 NaN이 반환됩니다.

## 5 BigInt
- 내부 표현 방식 때문에 자바스크립트에선 (253-1)(9007199254740991) 보다 큰 값 혹은 -(253-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.
- BigInt형은 표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있습니다.
- BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.
```
const bigInt = 1234567890123456789012345678901234567890n;
```

## 6 String
- 자바스크립트에선 문자열(string)을 따옴표로 묶습니다.
- 따옴표는 세 종류가 있습니다.
  - 큰따옴표: "Hello"
  - 작은따옴표: 'Hello'
  - 역 따옴표(백틱, backtick): Hello:
      -역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있습니다.

  - **No Char!**
    - 글자형은 없습니다.
    - 일부 언어는 글자 하나를 저장할 때 쓰이는 자료형, '글자(character)'형을 따로 지원합니다.
    - C 언어와 Java의 char가 대표적인 예입니다.
    - 자바스크립트는 글자형을 지원하지 않습니다.
    - 문자형만 있을 뿐입니다. 여기엔 글자가 하나 혹은 여러 개 들어갈 수 있습니다.

## 7 Symbol
- 심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다. 

## 8 Object
- 객체(object)형은 특수한 자료형입니다.
- 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부릅니다.
- 반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.
- 그런데 객체형은 원시형과 달리 다양한 데이터를 담을 수 있습니다. 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있죠.

<details>
<summary>객체 생성</summary>

객체는 중괄호 {…}를 이용해 만들 수 있습니다. 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다. 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부릅니다.
</details>
<details>
<summary>객체의 프로퍼티 접근</summary>
  
-  객체에선 키를 이용해 프로퍼티를 쉽게 찾을 수 있습니다.
  
- 두 가지 방법으로 프로퍼티 읽을 수 있음: 
  <details>
  <summary>  1) 점 표기법</summary>
    점 표기법(dot notation)을 이용하면 프로퍼티 값을 읽는 것도 가능합니다.
    
    ```    
    // 프로퍼티 값 얻기
    alert( user.name ); // John
    alert( user.age ); // 30
    ```
    
  </details>
  <details>
  <summary>  2) 대괄호 표기법</summary>
    
    - 여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없습니다.
    ```
    // 문법 에러가 발생합니다. 
        user.likes birds = true
    ```
    
    - 키가 유효한 변수 식별자가 아닌 경우엔 점 표기법 대신에 '대괄호 표기법(square bracket notation)'이라 불리는 방법을 사용할 수 있습니다.
      
    - 대괄호 표기법은 키에 어떤 문자열이 있던지 상관없이 동작합니다.
    ```
    let user = {};
  
    // set
    user["likes birds"] = true;
      
    // get
    alert(user["likes birds"]); // true

    // delete
    delete user["likes birds"];
    ```

</details>

## Peculiarities
```
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
```
(1) Math는 수학 연산을 제공하는 내장 객체이므로 "object"가 출력됩니다.
Math에 대해선 숫자형 챕터에서 학습하도록 하겠습니다. 
내장 객체는 객체형이라는 것을 알려주기 위해 이런 예시를 작성해 보았습니다.

(2) typeof null의 결과는 "object"입니다. 
null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만, 
하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황입니다. 
언어 자체의 오류이므로 null이 객체가 아님에 유의하시기 바랍니다.

(3) typeof는 피연산자가 함수면 "function"을 반환합니다. 
그러므로 typeof alert는 "function"을 출력해줍니다. 
그런데 '함수’형은 따로 없습니다. 함수는 객체형에 속합니다. 
이런 동작 방식이 형식적으론 잘못되긴 했지만, 
아주 오래전에 만들어진 규칙이었기 때문에 하위 호환성 유지를 위해 남겨진 상태입니다. 
한편, 실무에선 이런 특징이 매우 유용하게 사용되기도 합니다.

## Questions
-what is class, map, set, prototype, constructor?? How is everything connected?

