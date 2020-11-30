### Promise

-비동기를 콜백함수 대신에 사용되며 간단하게 처리할 수 있게 도와주는 object

-정상적으로 수행되면 성공의 메세지 + 결과값 전달 / 실패시 에러 전달

State : 프로세스가 수행하는 중(pending) →  기능 수행 완료(fulfilled or rejected)

Producer vs Consumer

1. Producer

```jsx
// when new Promise is created, the executor runs automatically
// 생성하면 바로 자동적으로 실행되니까 불필요한 네트워크 통신을 유의해서 사용한다.
const promise = new Promise((resolve, reject) => {
	// doing some heavy work (network, read files)
	console.log('doing something...');
	setTimeout(() => {
		resolve('ellie'); // resolve는 성공했을 때!
		// reject(new Error('no network'));
}, 2000);
});
```

2. Consumers: then, catch, finally

```jsx
promise 
  .then(value => { //then에 value에는 promise에서 resolve했던 값이 들어온다.
    console.log(value);
  })
  .catch(error => { // reject 실패했을 때
    console.log(error); 
  })
  .finally(() => { // 성공 실패와 상관없이 무조건 마지막에 호출.
    console.log('finally');
  });
```

3. Promise chaining

```jsx
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 1초 있다가 1 전달
});

fetchNumber
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 6 - 1 
    });
  })
  .then(num => console.log(num)); // 5
```

4. Error Handling

```jsx
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // .then( (hen) => getEgg(hen)) 생략 가능.
	.catch(error => {
		return '빵';
	}) // 에러 처리 가능
  .then(cook)
  .then(console.log)
  .catch(console.log);
```

5. Promise 사용 예시 (로그인해서 정보 받아오기)

```jsx
// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }

  // Homework Answer 🚀
  async getUserWithRole(user, password) {
    const user = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return role;
  }
}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

// Homework Answer 🚀
userStorage
  .getUserWithRole() //
  .catch(console.log)
  .then(console.log);
```
