# Basic 

## Why React??


**-user interfaces를 만들기 위한 library**

(사용자에게 보여지는 **UI**, **event** 반응 처리)

-MVC(model, view, controller) react는 여기서 **view**를 담당한다.

-싱글페이지 application. 화면 깜박임 없이 자연스럽게 넘어간다.

-state 변경시 render가 호출되고 Virtual DOM Tree로 변경이 필요한 부분만 업데이트된다.

=> Component를 사용해서 독립적이고, 유지보수와 재사용에 좋다.
<br>
<br>


## Frameworks vs Libraries

**Frameworks**: 이미 완성된 완성품. 

⇒ 정해진 골격 안에서 기능 구현

ex) **Angular**(Routing,UI,HTTP Clients, State 관리) 

장: 배우는게 오래걸린다. 

단: 업데이트 되면 다 새로배워야함.

<br>
<br>

**Libraries**: 여러개를(부품) 골라서 사용. 

UI, Routingm State 관리 따로 따로 사용.

⇒ 정해진 골격이 없기에 필요한 기능만 사용 가능.

ex) **React**

장: 배우는 속도가 빠르다. 문서화가 잘되어있다. 사용자가 많아서 자료가 많다. React Native, Electron으로 모바일, 데스크탑에도 사용 가능.

단: 버전이 업데이트 되어도 안정성이 좋다.


**Gatsby**

react는 UI, Event 처리를 주로 담당해서 라우팅 같은것들을 따로 해줘야 하지만 Gatsby는 라우팅, preloading , lazy loading 등 다양한 기능이 추가된 프레임워크이다.
<br>
<br>

## JSX

JSX=javascript+XML

JavaScript code안에서 html처럼 사용하게끔 도와준다.

html에서의 class를 className , onclick을 onClick으로 사용해야함.

{}을 함께 사용해주면 javaScript로 사용이 가능하다. (ex) {this.state.liked}

return은 여러개가 안되기 때문에 <React.Fragment> 혹은 빈 <> 로 묶어서 사용한다.

<br>

## react-dom

babel을 이용해서 순수 자바스크립트로 변환, 변환된 component를 html과 연결시켜주는 역할을 한다.

index.html에 있는 root와 component(App)를 연동한다

<br>

## State 와 Props
**state**

컴포넌트 안에서 내가 정의한 컴포넌트의 state 오브젝트

컴포넌트 UI를 위한 데이터를 보관하는 오브젝트, 이 **state라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리엑트가 자동적으로 render 함수 호출.**

<br>

**props**

props는 컴포넌트 밖에서(외부)에서 받아오는 데이터

컴포넌트의 재사용을 높이기 위해서 사용한다. (외부로 부터 데이터를 입력 받아서 같은 컴포넌트로 데이터에 맞게  UI 보여주기 위해.)

그래서 component 자체에서 state를 변경하는 것이 아니라 상위 컴포넌트로 부터 props를 받아서 처리한다.

title,onClick 같은 것들을 인자로 전달해 주면 이걸 props 오브젝트로 묶어서 컴포넌트로 전달


<br>

## Pure Component

Class에서 사용됨

하나를 바꾸면 다 호출이 되지만 업데이트가 되지 않고 dom이 바뀌지 않으면 그냥 넘어가서 성능에 영향이 없다.

=> 하지만, 컴포넌트가 업데이트 됐을때 수행되는 함수가 따로 있다면 이는 성능에 영향을 미친다.

=> 이를 방지하기 위해 Pure component, 메모

=> 변화가 없으면 render 안하기!!

이전 props,state를 지금과 비교해서(shallow하게=reference만 비교해서, 안에 동일한 object라면 데이터가 바껴도 false라고 한다. ) 

update가 필요하면 true를 return하면 업데이트 하게 해줌.

### PureComponent VS Component

PureComponent는'shouldComponentUpdate'을 구현해서 props과 state의 변경사항이 발생하면 shallow comparisons을 해서 오브젝트 자체가 변경되지 않았다면 render를 안하게 한다.

계속 업데이트가 되는 컴포넌트는 그냥 Component를 사용하면 된다.(비교하는데 시간이 더 쓰임)
