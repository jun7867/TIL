# Async
## 1. async vs defer

Synchronous : 한 작업이 끝나고 다음 작업이 차근 차근 실행된다.

Asynchronous : 동시에 여러 가지 작업을 병렬적으로 처리한다. 기다리는 과정에서 다른 함수 호출 가능


### 1-1. head안에 script 넣기

⇒ HTML을 parsing하다가 중간에 js 파일을 받기 때문에 HTML 파싱이 중간에 멈추게 된다.

### 1-2. body 밑에다가 script 넣기

⇒ HTML 파싱이 끝나고 JS를 다운받고 실행하지만 JS를 사용해서 UI적으로 효과를 주고 싶을때 제대로 적용이 안될 수 있다.

### 1-3. async 로 실행하기 

⇒ HTML을 파싱하다가 중간에 병렬적으로 JS 파일을 다운받고 실행할 수 있지만 다운되는 동안 HTML 파싱이 멈추게 되고 여러개의 JS를 다운받으면 각각 다운되자마자 실행되면서 순서에 의존적일 경우 문제가 생길 수 있다.

### 1-4. **defer 사용**

⇒ HTML 파싱을 하면서 중간에 JS파일을 동시에 받아놓고 HTML 파싱이 끝나게 되면 JS를 실행한다.

⇒ 제일 자주 쓰이는 방법!! 알아두기

![image](https://user-images.githubusercontent.com/36908476/99999470-8cfb6f80-2e03-11eb-8cd7-2c41c1b1b6bd.png)

## 2. callBack
자바스크립트는 synchronous 하다.

hoisting(var,function declaration이 자동으로 가장 위로 올라가는 것) 후에 코드가 순차적으로 실행된다.

비동기 실행방법

```jsx
setTimeout(() => {
	console.log('callback')
},1000);
```

-setTimeout으로 콜백을 보내게 되면 브라우저에 요청을 하고 요청을 기다리지 않고 바로 다음으로 넘어간다.

-callback이란 설정한 초가 지나면 함수를 다시 불러달라는 뜻이다.

### Synchronous callback

```jsx
function printImmediately(print){
	print();
}
console.log('1)
setTimeout(() => { console.log('2')},1000);
console.log('3')
printImmediately(() => console.log('hello'));
// 출력 순서 1 -> 3 -> hello -> 2
```

### Asynchronous callback (비동기 콜백)

```jsx
function printWithDelay(print,timeout) {
	setTimeout(print,timeout);
}
function printImmediately(print){
	print();
}
console.log('1)
setTimeout(() => { console.log('2')},1000);
console.log('3')
printImmediately(() => console.log('hello'));
printWithDelay( () => console.log('async callback'),2000);
// 출력 순서 1 -> 3 -> hello -> 2 -> async callback
```
