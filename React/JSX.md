## 번들러 (Webpack)

```jsx
import React from 'react';
```

- node_modules에 있는 react 모듈을 불러오는 것.
- 원래 브라우저에서는 모듈을 불러와서 사용하는 기능을 제공해주지 않는다. 이러한 기능을 사용하기 위해 **번들러(bundler)**를 사용해서 파일을 묶듯이 연결한다. 대표적인 번들러는 **Webpack**, Parcel, browserify 등이 있으며 리엑트에서는 주로 웹펙을 사용한다.
- 번들러를 사용하면 import(or require)로 모듈을 불러왔을 때 **불러온 모듈을 모두 합쳐서 하나의 파일을 생성**해 준다. 또 최적화 과정에서 여러 개의 파일로 분리 될 수도 있다.
- 웹펙을 사용하면 SVG 파일과 CSS 파일도 불러서 사용할 수 있다. 파일들을 불러오는 것은 웹팩의 로더(loader)라는 기능이 담당한다. ex) css-loader, file-loader, babel-loader
- 웹펙의 loader는 원래 직접 설치하고 설정해야 하지만, CRA를 사용하면 알아서 설정해 준다.

### *바벨이 하는일

1. ES6 문법을 ES5 형태로 변환. (최신문법 호환을 위해서) 
2. JSX를 자바스크립트로 변환하기 위해서

## JSX

JSX는 자바스크립트의 확장 문법이며 XML과 비슷하게 생겼다. 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 **바벨을 사용하여 일반 자바스크립트 형태로 변환**된다. 

```jsx
function App() {
	return (
		<div>
			Hello~ 
		</div>
	);
}

// 바벨이 변환 시켜줌. => 
function App() {
	return React.createElement("div",null,"Hello~");
}
```

이처럼 JSX를 사용하면 createElement처럼 사용하지 않아도 간편하게 사용할 수 있다. 가독성이 좋다~~!

```jsx
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>, // 첫번쨰 파라미터: 렌더링할 내용
	document.getElementByID('root') // 두번째 파라미터: 렌더링할 document 내부 요소
);
```

JSX를 통해 App 컴포넌트도 마치 HTML 쓰듯 작성할 수 있다. 

Q. ReactDOM.render는 무엇일까? 
- 컴포넌트를 페이지에 렌더링하는 역할을 하며, react-dom 모듈을 불러와 사용할 수 있다. 

Q. React.StrictMode는 무엇일까?
- 리엑트의 레거시 기능들을 사용하지 못하게 막는 기능. 나중에 사라지게 될 예전 기능들을 사용하면 경고가 출력된다. 현재는 기본 옵션으로 적용됨.

### JSX 문법

1. 컴포넌트에 여러 오소가 있다면 반드시 부모 요소 하나로 감싸야 한다. (<> 혹은 <div> 또는 <Fragment>)  
감싸는 이유는 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 **컴포넌트 내부에 하나의 DOM 트리 구조로 이루어져야 한다는 규칙**이 있기 때문이다.!! 
2. JSX에서 자바스크립트 표현식을 작성하려면 내부에 {}로 감싸면 된다. 

```jsx
...
const name = 'Nam'; 
return (
<>
	<h1> **{name}** hi~ </h1>
</>
...
```

 3. JSX 내부에서는 if 문을 사용할 수 없다. JSX 밖에서 사용하거나 { } 안에 조건부 연산자를 사용함으로써 해결하도록 하자 (삼항 연산자) 

```jsx
{name === 'Nam' ? (
	<h1>Nam입니다.</h1> 
	) : (
	<h2>Kim입니다.</h2> 
)}  
```

4. 조건에 따라서 선택해주고 싶을 때 && 나 null을 사용. 

```jsx
{ ... ? .. : null} // null
{ ... && @@@} // ...이 true면 @@@ 실행 
```

5. 괄호로 감싸는 것은 보통 여러 줄로 작성할 떄 괄호로 감싸준다. 하지만 필수 사항은 아니다. 

6. undefined만 반환하여 렌더링하지 않기. 이를 방지하기 위해 || 를 사용하면 좋다. 

```jsx
...
return <div>{name || 'undefined입니다.'}</div>;
```

7. 인라인 스타일링. - 문자가 있으면 안돼서 카멜 표기법으로 작성.

```jsx
const style = {
	backgroundColor: 'black', // background-color -> x
};
return <div style={style}>hi</div>;
```

8. class 대신 className을 사용한다. 

9. JSX 내부에서 주석 작성   **{ /* 주석 ~~ */}** 

```jsx
**{ /* 주석 ~~ */}** 

// 를 사용하면 화면에 //이 그대로 보이게 된다. 
```
