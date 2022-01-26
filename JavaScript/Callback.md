# callBack

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

---

단, 콜백 여러개를 한번에 연결하는 콜백지옥을 피해야 한다.

다음과 같은 작업에서 비동기 처리가 주로 사용된다.

- **Ajax Web API 요청**: 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리합니다.

- **파일 읽기**: 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리합니다.

- **암호화/복호화**: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리합니다.

- **작업 예약**: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리합니다.


---
### 코어 자바스크립트 개념 추가 (22.1.26)
### 제어권 위임

```jsx
setInterval(callback,mill)

```

setInterval에게 callback 함수의 제어권을 넘겨준다. 

### 콜백함수의 특징

1. 다른 함수의 인자로 콜백함수를 전달하면, 해당함수는 콜백함수의 제어권을 갖게 된다.

2. 특별한 요청이 없는한(bind) 미리 정해놓은 방식에 따라 콜백함수를 호출한다. (미리 정해놓은 방식 = 어떤 시점에, 인자는 어떻게, this에는 무엇을 바인딩할지..) 

ex) setInterval, addEventListener..
