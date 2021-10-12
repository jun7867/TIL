### Reference

[Understanding reactivity · MobX](https://mobx.js.org/understanding-reactivity.html)

[Hello, MobX](https://hyunseob.github.io/2017/10/07/hello-mobx/)

[MobX (1) 시작하기](https://velog.io/@velopert/begin-mobx)

[반응성 이해하기 · MobX](https://ko.mobx.js.org/understanding-reactivity.html)

---

## 1-1. MobX의 주요 개념

### 1) Observable State (관찰 받고 있는 상태)

- 상태의 변경이 잇으면 Mobx에서 관찰하고 있다가 어떤 부분이 바뀌었는지 파악한다.

### 2) Computed Value (연산된 값)

- 기존의 상태값과 다른 연산된 값에 기반하여 만들어질 수 있는 값으로 성능 최적화를 위해 사용된다. 어떤 값을 연산할때, 연산에 기반되는 값이 바뀔때만 새로 연산하고, 바뀌지 않았다면 기존의 값을 사용한다. (vue에서 computed와 비슷한거같음..)

### 3) Reactions (반응)

- 값이 바뀜에 따라 해야 할 일을 정한다. 즉, observable state의 내부 값이 바뀌면 따로 설정해둔 할 일을 실행한다.

### 4) Actions (액션; 행동)

- 상태에 변화를 일으킨다. state를 변화시키는 활동 ⇒ 액션

---

### 특징

- 상태 관리 라이브러리
- 반응형 아이디어를 적용하여 옵저버(Observer)패턴을 사용한다.
- Mobx에서는 오직 상태(데이터)만 관찰 가능하며, 상태가 변경되었을 때 반응한다. 상태를 변경하는 것도 직접 해야 한다. 
⇒  Mobx는 상태를 Observable하게 관리할 수 있도록 돕는 라이브러리이다.

### 환경설정

```tsx
yarn add mobx mobx-react
```

### 간단 예시

src/Counter.js

```tsx
import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Counter extends Component {
  number = 0;

  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

decorate(Counter, {
  number: observable,
  increase: action,
  decrease: action
})

export default observer(Counter);
```

src/App.js

```tsx
import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
```

### decorator 사용

```tsx
//babel 추가
yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

```tsx
import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

// **** 최하단에 잇던 observer 가 이렇게 위로 올라옵니다.
@observer
class Counter extends Component {
  @observable number = 0;

  @action
  increase = () => {
    this.number++;
  }

  @action
  decrease = () => {
    this.number--;
  }

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

// **** decorate 는 더 이상 필요 없어집니다.
// decorate(Counter, {
//   number: observable,
//   increase: action,
//   decrease: action
// })

// export default observer(Counter);
// **** observer 는 코드의 상단으로 올라갑니다.
export default Counter;
```

### Provider로 스토어 적용

stores/counter.js

```tsx
import { observable, action } from 'mobx';

export default class CounterStore {
  @observable number = 0;
  
  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}
```

src/index.js 

```tsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CounterStore from './stores/counter'; // 방금 만든 스토어 불러와줍니다.

const counter = new CounterStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
  <Provider counter={counter}>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
```

### inject로 컴포넌트에 스토어 주입

inject를 통해서 컴포넌트에서 스토어에 접근할 수 있도록 해준다. 

src/Counter.js 

```tsx
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

**@inject('counter')**
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
```

Q. 

1. decorator를 사용하는지?
⇒ O
2. 스토어 적용하는지?
⇒ O 
3. inject는 사용 안하나요?? provider사용 안하고 store는 어떻게 하나요?
⇒ provider , inject 사용함. 

*관련 이슈 

[deprecate `inject` and `Provider` · Issue #410 · mobxjs/mobx-react](https://github.com/mobxjs/mobx-react/issues/410)


### 직방 (Mobx 렌더링 개선)
https://medium.com/zigbang/mobx-%EC%B5%9C%EC%A0%81%ED%99%94%EB%A1%9C-%EC%A7%81%EB%B0%A9%EC%95%B1-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0-3cd6e1cec569
