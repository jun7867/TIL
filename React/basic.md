# React Basic 개념 

## What React??


**UI(user interfaces)를 만들기 위한 library로 Component들이 모여서 만들어 졌다.** 

(사용자에게 보여지는 **UI**, **event** 반응 처리)

-MVC(model, view, controller)에서 react는 **view**를 담당한다.

-Single page application으로 화면 깜박임 없이 자연스럽게 넘어간다.

-State 변경시(데이터가 변경될 때마다) render 함수가 호출되고, 모든 요소가 업데이트 되는것이 아니라 Virtual DOM Tree가 변경이 필요한 부분만 업데이트 시켜준다.

<br>
<br>

## Component란?

-Component는 하나의 기능을 수행하는 UI 단위이다. (button, Navbar...) 즉, 사용자에게 보여지는 위젯 단위

-Root라는 Component 안에 다양한 Component들이 존재하며 그것들은 각각 독립적이고 이들을 조립해서 만든다.

-Component를 사용하면 독립적이고, 유지보수와 재사용에 좋다.

-재사용이 가능할만큼 나눠야 하며 너무 작은 단위로 나누게 되면 오히려 재사용이 힘들다.

<br>

## Frameworks vs Libraries 

**Frameworks**: 이미 완성된 완성품. 

⇒ 정해진 골격 안에서 기능 구현

ex) **Angular**(Routing,UI,HTTP Clients, State 관리) 

장: 배우는게 오래걸린다. 

단: 업데이트 되면 다 새로 배워야함. (앵귤러 1 -> 앵귤러 2 로 업데이트 되었을 때 완전히 새로운 언어라 새로 배워야 했다)

<br>
<br>

**Libraries**: 여러개를(부품) 골라서 사용. 

UI, Routingm State 관리 따로 따로 사용.

⇒ 정해진 골격이 없기에 필요한 기능만 사용 가능.

ex) **React**

장: 배우는 속도가 빠르다. 문서화가 잘되어있다. 사용자가 많아서 자료가 많다. React Native, Electron으로 모바일, 데스크탑에도 사용 가능. 버전이 업데이트 되어도 안정성이 좋다.

<br>
<br>
**Gatsby**

react는 UI, Event 처리를 주로 담당해서 라우팅 같은것들을 따로 해줘야 하지만 Gatsby는 라우팅, preloading , lazy loading 등 다양한 기능이 추가된 프레임워크이다.
<br>
<br>

## Class vs Function

### Class

-state, data가 담기는 State object가 들어가 있다.

-Lifecycle method(component 상태에 따라서 Dom Tree 자동 업데이트)

-상태가 있고 주기적으로 변경될 때

### Function

-state가 없고 정적일 때

-Lifecycle method가 없다.

-한가지의 기능을 수행하는 단위

### Hook

-Hook은 최신 버전으로 function에서도 state와 lifecycle method를 사용할 수 있게 해준다.

-Class는 this.~~ 식으로 해야하기에 Hook을 사용하면 this binding issue 귀찮음을 줄여주고 코드의 중복을 제거해준다. (마운트, 언마운트..)

-대신, 최신 버전이기에 class로 짜여진 것들이 많기에 class도 할 줄 알아야 한다.


## react-dom

babel을 이용해서 브라우저가 이해할 수 있도록 순수 자바스크립트로 변환, 이렇게 변환된 component를 html과 연결시켜주는 역할을 react-dom이 한다.

index.html에 있는 root와 component(App)를 연동한다. root id값을 가진 div에 App component가 연결된다.

![image](https://user-images.githubusercontent.com/36908476/96299726-6c374180-102f-11eb-9ca0-b75cf80c9792.png)

[보충내용](https://ko.reactjs.org/docs/react-dom.html)

<br>

## JSX란 무엇인가?

JSX=javascript+XML

JavaScript code안에서 html처럼 사용하게끔 도와준다.

html에서의 class를 className , onclick을 onClick으로 사용해야함.

{}을 함께 사용해주면 javaScript로 사용이 가능하다. (ex) {this.state.liked}

return은 여러개가 안되기 때문에 <React.Fragment> 혹은 빈 <> 로 묶어서 사용한다.

![image](https://user-images.githubusercontent.com/36908476/96302052-0baa0380-1033-11eb-9cea-8a68140a623f.png)

![image](https://user-images.githubusercontent.com/36908476/96302192-50ce3580-1033-11eb-8fcd-50a2ad1be084.png)

![image](https://user-images.githubusercontent.com/36908476/96303006-aa832f80-1034-11eb-80bc-f9797172a039.png)

[JSX 기초](https://ko.reactjs.org/docs/introducing-jsx.html)

[JSX 심화](https://ko.reactjs.org/docs/jsx-in-depth.html)

<br>

## Lifecycle
![image](https://user-images.githubusercontent.com/36908476/96350751-255e5000-10f2-11eb-94e6-b5787d2386b1.png)

컴포넌트와 연관 없는 이벤트를 처리 해야 할 경우에 많이 사용된다. (윈도우 스크롤링 이벤트)

이벤트를 생성을 했으면 꼭 삭제해 줘야함. (리소스 낭비를 줄이기 위해)

componentDidMount() - component가 추가되었을 때 (UI상에서 생길 때)

componentWillUnmount() - component가 삭제하기 전에 호출됨.(UI상에서 없어질 때)

[https://reactjs.org/docs/state-and-lifecycle.html](https://reactjs.org/docs/state-and-lifecycle.html)


## Tips

-파일명은 소문자로 (따로 규칙은 없지만 배포시 혼동을 피하기 위해)

-Component 이름은 반드시 **대문자**!!

-rcc 를 하면 기본적인 Class 구조가 자동 완성된다.

-rsi는 function 구조가 자동 완성된다. (Hook 사용시)

-Font Awesome을 사용하려면 yarn으로 설치해야함

```
yarn add @fortawesome/fontawesome-free
```

그리고 index.js에 아래 구문 추가

```
import '@fortawesome/fontawesome-free/js/all.js';
```
