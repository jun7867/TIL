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

비동기 실행방법 (setTimeOut)

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

다음과 같은 작업에서 비동기 처리가 주로 사용된다.

- **Ajax Web API 요청**: 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리합니다.

- **파일 읽기**: 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리합니다.

- **암호화/복호화**: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리합니다.

- **작업 예약**: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리합니다.


# async & await

- 프로미스 체이닝을 계속 하다보면 코드의 가독성이 떨어짐
- async 와 await는 Promise를 간결/간편하고 동기적으로 실행되는것 처럼 보이게 만들어주는 API
- async 와 await는 새로운 것이 추가 된게 아니라, 기존에 존재하는 Promise 위에 조금 더 간편한 API를 제공함 이런 것을 syntactic sugar 라고 한다 (Class도 마찬가지..)

# 비동기 처리를 반드시 해야하는 이유

- JS 엔진은 블록({})안에 코드를 동기적으로 실행(처리) 함
- 시간이 오래 걸리는 코드를 비동기 처리를 전혀 하지 않으면, 다음 코드에 문제가 발생할 수 있음
- 예를 들어 서버에서 data를 받아와서 웹페이지에 출력하는 시나리오가 있다
- data를 받아 오는데 10초가 걸림, 근데 비동기 처리를 안하면 텅 빈 data를 출력 해버림
- **Promise 상황극**: 내가 언제 유저의 data를 받아 올진 모르겠지만 내가 약속할께, Promise라는 object를 가지고 있으면, 여기에 니가 then 이라는 콜백함수만 등록해 놓으면, 유저의 data가 준비 되는대로 니가 등록한 콜백함수를 불러줄께

---

## 1. async

### 1.1 기존 방식(Promise)

```jsx
// 프로미스를 사용하면 반드시 resolve와 reject를 호출해야 함
function fetchUser() {
  return new Promise((resolve, reject) => {
    // return `ellie`; // 프로미스 pending 상태
		resolve(`ellie`); // 프로미스 fulfilled 상태
		// reject(new Error(`error`)); // 프로미스 rejected 상태
  });
}

const user = fetchUser();
// console.log(user);
user.then(user => console.log(user));
```

### 1.2 async 사용

- async를 사용하면 함수의 코드 블록이 자동으로 Promise로 변환이 되어짐 (대박!)

```jsx
// 1. 함수 선언식
async function fetchUser() {
  return `ellie`;
}

// 2. 함수 표현식
const fetchUser = async function() {
  return `ellie`;
};

// 3. 화살표 함수
const fetchUser = async () => {
  return `ellie`;
};

// fetchUser().then(data => console.log(data)); // 함수로 바로 호출
const user = fetchUser(); // 변수에 할당해서 호출
user.then(data => console.log(data));
console.log(user);
```

---

## 2. await

### 2.1 기존 방식(Promise)

- 콜백 지옥이 떠오름..

```jsx
function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

function getApple() {
  return delay(1000)
  .then(() => `🍎`);
}
function getBanana() {
  return delay(1000)
  .then(() => `🍌`);
}

function pickFruits() {
  return getApple()
  .then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}
pickFruits().then(result => console.log(result));
```

### 2.2 await 사용 (error 처리: try/catch문)

- await는 async 함수 내부에만 사용 가능
- getApple과 getBanana는 서로 독립적인 코드인데 순차적으로 실행됨 → 비효율

```jsx
function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw new Error(`error: apple`); // error 발생
  return `🍎`;
}
async function getBanana() {
  await delay(1000);
  // throw new Error(`error: banana`);
  return `🍌`;
}

async function pickFruits() {
  let apple = null;
  try {
    apple = await getApple();
  } catch(error) {
    console.log(error);
  }
  let banana = null;
  try {
    banana = await getBanana();
  } catch(error) {
    console.log(error);
  }
  return `${apple} + ${banana}`;
}
pickFruits().then(result => console.log(result));
```

### 2.3 await 병렬 처리

```jsx
function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return `🍎`;
}
async function getBanana() {
  await delay(1000);
  return `🍌`;
}

// 방법 1: 무식한 코드
async function pickFruits() {
  // 프로미스 객체는 선언 즉시 바로 실행됨
  // getApple과 getBanana는 병렬(독립적)로 실행됨
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 동기화
  const apple = await applePromise; 
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(result => console.log(result));

// 방법 2: Promise APIs 사용
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => {
    return fruits.join(` + `);
  });
	// return Promise.all([getApple(), getBanana()]);
}
pickAllFruits().then(console.log);

// 번외: 비동기 처리중 먼저 리턴하는 녀석만 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
```

