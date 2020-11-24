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
2. **object**, box container : single item을 여러개 묶어서 사용
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
