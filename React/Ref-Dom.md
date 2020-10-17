# Ref Dom
Ref는 render 메서드에서 생성된 DOM 이나 React element에 접근하는 방법을 제공한다.

직접적으로 자식을 수정해야 하는 경우 Ref를 사용하면 해결할 수 있다.

react에서는 querySelector처럼 바로 DOM에 접근하는것이 아니라 React.createRef를 변수로 할당해 놓고 원하는 react component에 ref로 연결하면 된다.

## Ref 생성하기
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

## Ref에 접근하기
render 메서드 안에서 ref가 엘리먼트에게 전달되었을 때, 그 노드를 향한 참조는 ref의 current 어트리뷰트에 담기게 된다.
```
const node = this.myRef.current;
```

## 실전 예시 (form에 입력한 값을 전달)
```
import React, { memo } from "react";

const Input = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="input" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="input-box"
        placeholder="Habit"
      ></input>
      <button className="input-btn">Add</button>
    </form>
  );
});

export default Input;

```


https://ko.reactjs.org/docs/refs-and-the-dom.html
