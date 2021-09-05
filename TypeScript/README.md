[리액트 프로젝트에서 타입스크립트 사용하기](https://velog.io/@velopert/using-react-with-typescript)

## 쓰는 이유

- 타입이 없으면 위험함. (propTypes를 사용하기도 불편함)
- 내부 파라미터 자동완성
- 실수를 줄여준다.

## interface

- 클래스 또는 객체를 위한 타입을 지정 할 때 사용한다.

```jsx
// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

  radius: number; // 멤버 변수 radius 값을 설정합니다.

  constructor(radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});
```

## Type Alias

```jsx
type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람'
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

**type People = Person[];** // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

**type Color = 'red' | 'orange' | 'yellow';**
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
```

## Generics

- 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법.
- 어떤 타입이 올 지 모를때. (ANY는 사용하는 의미가 없음)

```tsx
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

// ex
function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);

//interface
interface Items<T> {
  list: T[];
}

// items는 String[] 타입을 가지고 있음. 
const items: Items<string> = {
  list: ['a', 'b', 'c']
};

// type
type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ['a', 'b', 'c']
};
```

## React.FC 장단점

### 장점

- props에 기본적으로 children이 들어가 있다.
- defaultProps, propTypes, contextTypes 설정시 자동완성 가능.

### 단점

- children이 옵셔널 형태다 보니 props의 타입이 명백하지 않다.

⇒ defaultProps가 정상 작동하지 않기에 비구조화 할당에서 명시해 줘야 한다. 

```tsx
// XXXXXX

import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

// 적용이 안됨.
Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;

// OOOOOO
const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
  <div>
    Hello, {name} {mark}
  </div>
);
```

- 컴포넌트 props중에 생략할게 있다면 ? 넣어주기.

---

## react Hook + tsc

### useReducer

- useState의 대체 함수입니다. (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환
- 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우에 사용

```tsx
import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
```

---

### 2021.09.03

- {match} 키워드를 받을때는 extends 시켜줘라..

```tsx
interface ISearchProps extends RouteComponentProps<{keyword: string}>{
    // IMDB: Imdb;
    searchVideo?: SearchStore;
}
```
