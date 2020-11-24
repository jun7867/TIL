# JavaScript 기본 정리

## Variable , Data type
### let,const

`let`  메모리 주소를 갖고 있고 값 변경 가능하다. mutable (ES6에 추가)

`const` 포인터가 잠겨있어서 선언과 할당할 수 있지만 값 변경 못한다. (Inmutable) 

⇒ const를 사용하는 이유 (security, thread safety, reduce human mistakes)

⇒ var는 이전 버전에서 사용되는 것으로 지금은 쓰면 안된다!! (block space { }를 무시함, var hoisting)

*hoisting (어디에 선언하든 상관없이 맨 위로 끌어 올려준다, )

단...ES6은 IE는 지원안됨.. 걍 버리는게 ... 아니면 BABEL로 버전 낮춰주기.

### Data type
1. **primitive** type , single item: number string boolean null undefiedn, symbol

-값 자체가 저장된다.

2. **object**, box container : single item을 여러개 묶어서 사용

-reference를 통해서 object가 담겨있는 메모리에 접근 (const를 사용하면 reference만 잠긴다. 그래서 mutable함)

3. **function** (= first-class function : 함수를 변수에 할당하고 파라미터 전달, 리턴타입으로 사용 가능)

- number

    ```jsx
    // long, int, float 등등 다 let 으로 사용 가능
    let a = 123;
    let a = 1.2;
    const bigInt =12313124123411475914759817495n // n을 붙이면 큰 범위 가능. (단, 지원 되는 브라우저 잘 확인)
    // 밑에는 에러를 발생할 수 있는 것으로 조심.
    const infinity = 1 / 0; // Infinity
    const negativeInfinity = -1 / 0; // -Infinity
    const nAn = 'not a number' / 2; // NaN 
    ```

- string

    ```jsx
    // char .. 등등 다 string으로.
    let str1 = '123';
    let str2 = "123";
    const greeting = 'hello' + 'hi';
    const strGreeting = `hi ${greeting}` ; // template literals
    ```

- boolean

    ```jsx
    let F = false; // 0 , null. underfined, NaN, ''
    let T = true; // any other value
    ```

- null, undefined

    `null` : 아예 없다

    `undefined` : 아직 정해지지 않았다

    ```jsx
    let nothing = null;
    let x = undefined;
    ```

- symbol

```jsx
const symbol1 = Symbol('id') // 고유한 식별자를 주기 위해서
console.log(`value: ${symbol1.description}`; // .description으로 string 변환 해야함
```

- object

```jsx
const jun = {name : 'jun' , age: 26}
jun.age=27; // const지만 .~ 을 하면 주소에 접근 가능해서 수정 가능.
```

### *Dynamic typing

프로그램이 실행 되는 중간에(run time) 타입이 변경될 수 있다. 

```jsx
let text = 'hi'; // string
text=1; // number
text='7'+5; // string
text= '8' / '2'; //number
```

⇒ 이는 프로그램에서 에러를 발생시킬 수 있기 때문에 TypeScript가 나왔다. (나중에 왜 사용하는지 물어보면)

### 연산 operator

- Numberic operators

    ```jsx
    console.log(1+1);
    console.log(1-1);
    console.log(1*1);
    console.log(1/1);
    console.log(1%1);
    console.log(1**1);
    ```

    Increment and decrement operators

    ```jsx
    let a = 1;
    console.log(a++); // 1
    // a == 2
    console.log(++a); // 3
    ```

- Assignment operator

    ```jsx
    let x = 1;
    x += 3; // x = x+3
    x -= 3;
    x *= 3;
    x /= 3;
    console.log(x);
    ```

- Logical operators
    - `!` : NOT

        NOT 연산자는 true를 false로, false를 true로 바꾼다.

        ```jsx
        const a = !true;
        console.log(a); // false
        ```

    - `&&` : AND

        AND 연산자는 양 쪽 값 모두 true일 때만 true를 반환한다.

        ```jsx
        const a = true && true;
        console.log(a); // true

        // 나중에 유용하게 사용하는 Tip
        if nullObject && nullObject.someting~~ // 앞에가 null이면 뒤에 체크 안하고 바로 끝남
        ```

    - `||` : OR

        OR 연산자는 양 쪽 값 중 하나라도 true이면 true를 반환한다.

        만약에 연산이 복잡한게 있다면 되도록 뒤에 둔다. (간단한 것이 true이면 자동으로 true)

        ```jsx
        let t = true || false;
        t = false || true; // true
        t = true || true; // true
        t = false || false // false
        ```

    - 연산 순서

        NOT → AND → OR

        ```jsx
        const value = !((true && false) || (true && false) || !false);

        // NOT -> AND -> OR 순서로 처리
        // 1. const value = !((true && false) || (true && false) || true);
        // 2. const value = !(false || false || true);
        // 3. const value = !true;
        ```

- Equality
    - 일치 여부 비교

        `===`을 통해 일치 여부를 비교할 수 있다.

        ```jsx
        // === strict equality, no type conversion
        const a = 1;
        const b = 1;
        const equals = a === b; // true
        console.log(equals);
        ```

        `==`은 타입 검사를 하지 않기 때문에 되도록 `===`을 사용한다.

        ```jsx
        // == loose equality, with type conversion
        const a = 0;
        const b = false;
        const equals = (a == b); // true
        console.log(equals);
        ```

        object도 신경써서 해야한다.

        ```jsx
        const e1 = {name: 'e' };
        const e2 = {name: 'e' };
        const e3 = e1;
        console.log(e1==e2); // F
        console.log(e1===e2); // F ( reference가 다르다)
        console.log(e1===e3); // T (reference가 같다)
        ```

        ```jsx
        console.log(0 == false); // T
        console.log(0 === false); // F ( number와 boolean 타입이 다름)
        console.log('' == false); // T
        console.log('' === false); // F
        console.log(null == undefined); // T
        console.log(null === undefinded); // F
        ```

- 문자열 붙이기

    `+` 연산을 통해 문자열을 붙일 수 있다.

    ```jsx
    const a = 'my';
    const b = 'cat';
    console.log(a + b); // mycat
    ```

- 삼항 연산자

```jsx
a > 3 ? n=3 : n=0 // True면 ? 뒤에 , False면 : 뒤에
```
