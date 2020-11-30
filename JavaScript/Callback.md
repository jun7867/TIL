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
