# Function

## 1. Default parameters (added in ES6)
파라미터를 아무것도 전달해주지 않으면 default값을 자동으로 해주는데 이를 쉽게 설정해 줄 수 있다.
```
function showMessage(message,from='unknown'){
  console.log(`${message} by ${from}`)
}
showMessage('hi')
```

## 2. Rest parameters (added in ES6)
...은 배열 형태로 전달해준다.
```
function printAll(...args){
  for (let i=0; i< ars.length; i++) {
    console.log(args[i]);
  }
  
  for (const arg of args) {
    console.log(arg);
  }
  
  args.forEach((arg) => console.log(arg));
}
printAll('aa','bb','cc')
```

## 3. local scople
"안에서는 밖이 보이지만 밖에서는 안을 볼 수 없다."

{ } 안에서는 밖에것을 쓸 수 있는데 밖에서 { } 에서 정의된 변수를 사용 못함.

## 4. First-class function
function은 변수로 할당, 리턴값으로, 파라미터로 사용 가능.

## 5. arrow function
```
const add (a,b) => a+b
```

## 6. IIFE: Immediately Invoked Function Expression
함수를 선언하면서 바로 ()로 감싸고 ()로 호출하면 즉시 사용 가능하다.
```
(function hello() {
  console.log("hello");
})();
```
