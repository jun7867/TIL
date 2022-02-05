# 정재남 코어 자바스크립트 요약

생성자 함수가 new 연산자로 인스턴스(Instance)를 만들면, constructor의 ‘prototype’이라는 프로퍼티의 내용이 [[Prototype]] 라고 하는 프로퍼티로 참조를 전달한다. 
⇒ **constructor.prototype이랑 instance[[Proototype]]가 같은 객체를 바라본다. 그런데** [[Proototype]]는 접근 가능한 것이 아니라 정보를 보여주기만 하고 실제 동작에서는 instance와 동일시된다. 

### 프로토타입 예시

Array의 prototype은 new 연산자로 생성한 instance 배열의 [[Prototype]]와 연결이 되어있다.

prototype이라는 프로퍼티는 객체인데 concat(), filter(), map() ...이라는 것들이 담겨있다. 같은 내용이 [[Prototype]]에도 있다. 

### 문자열, 숫자 리터럴(기본형 타입) 프로토타입 예시

문자열, 숫자 리터럴은 객체가 아니기 때문에 [[Prototype]]가 존재하지 않는다. 하지만, 메서드를 쓰려고 하면 자바스크립트가 임시로 Number, String 생성자 함수의 인스턴스를 만들어서 메서드를 적용한 후에 다시 인스턴스를 제거하는 식으로 동작한다.

null과 undefined를 제외하고 모든 데이터타입은 생성자 함수가 존재하고 이 생성자 함수의 프로토타입을 통해 전용 메서드들을 사용할 수 있다. 

### 인스턴스에 접근하는 방법

10.[[Prototype]].toFixed() 처럼 접근이 불가능하다. 

접근 방법

```jsx
instance.__proto__ // 비공식 
Object.getPrototypeOf(instance) // 공식 (추천 방법)
```


모두 같은 Person.prototype을 가르킨다. 

---

### 활용 예시

인스턴스들이 모두 똑같이 가지는 정보들을 prototype으로 참조한다. 
⇒ 효율성이 좋아진다. (반복 제거)

---

### 프로토타입 체이닝

모든 데이터타입은 Object.prototype과 프로토타입 체인으로 연결이 되어있다. 

즉, Object의 prototype에 있는 toString(), valueOf().. 같은 것들을 사용 가능하다. 


그렇기 때문에 **Object의 prototype에는 공통된 것들만 넣어주어야 하기 때문에** Object라는 것에 따로 만들어줘서 Object 객체 자체를 사용하는 경우가 있다. (Object.keys())


---

**즉, 프토토타입 체인을 통해서 instance에서 생성자 함수의 prototype에 있는 메서드와 Object의 prototype에 정의된 메서드를 사용할 수 있다.**


---

자바스크립트를 이루는 거의 모든 것이 객체다. 원시 타입의 값을 제외한 나머지 값들(함수, 배열, 정규 표현식)은 모두 객체다. 

## 객체지향 프로그래밍

객체지향 프로그래밍은 프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍의 관점에서 벗어나 여러 개의 독립적 단위, 즉 객체(object)의 집합으로 프로그램을 표현하는 방식을 말한다. 

실세계의 실체(사물이나 개념)을 인식하는 철학적 사고를 프로그래밍에 접목한다. 실체는 특징이나 성질을 나타내는 **속성(attribute/property)**을 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다. 

(속성은 이름,주소,성별,나이 ..등등) 

사람에게는 다양한 속성이 있으나 구현하려는 프로그램에서는 사람의 "이름"과 "주소"라는 속성에만 관심이 있을 때, **다양한 속성 중에서 필요한 속성만 간추려 내어 표현하는 것을 추상화(abstraction)**이라 한다.

객체지향은 객체의 상태(state)를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작(behavior)를 하나의 논리적인 단위로 묶어 생각한다. 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 표현 가능하다. **이때, 객체의 상태 데이터를 프로퍼티 / 동작을 메서드라 부른다.**

## 상속과 프로토타입

상속은 객체지향의 핵심 개념으로, 어떤 객체의 프로퍼티나 메서드를 다른 객체가 상속받아 사용할 수 있는 것을 말한다. 

자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다. 

### 생성자를 사용한 상속의 문제점과 해결방안

생성자 함수를 사용하여 메서드를 공유할 경우 메서드가 중복 생성되고 모든 인스턴스가 중복 소유한다. 이는 불필요한 메서드를 중복 소유하기 때문에 메모리가 낭비된다. 
⇒ 따라서 **자바스크립트에서는 프로토타입(prototype)을 기반으로 상속을 구현**한다. 

```jsx
// 잘못된 방법 (중복 생성)
function Circle(radius){
	this.radius=radius;
	this.getArea = function({
		return 3.14*this.radius**2;
	}
}

// 프로토타입 방법
function Circle(radius){
	this.radius=radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유하도록 프로토타입에 추가.
Circle.prototype.getArea= function() {
	return 3.14 * this.radius **2;
}
```

Circle 생성자 함수가 생성한 모든 인스턴스는 자신의 프로토타입,(Circle.prototype의 모든 프로퍼티와 메서드)를 상속받는다. 

⇒ **재사용 관**점에서 매우 유용하다. 

## 프로토타입 객체

프로토타입 객체란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다.

모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지며, 이 내부 슬롯의 값은 프로토타입의 참조다. Prototype에 저장되는 프로토타입은 객체 생성 방식에 의해 결정된다. 즉, 객체가 생성될때 객체 생성 방식에 따라 결정된다. 

객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이며 생성자 함수에 의해 생성된 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다. 

모든 객체는 하나의 프로토타입을 갖는다. 그리고 모든 프로토타입은 생성자 함수와 연결되어 있다. 

(생성자 함수 - 생성자 함수.prototype - 객체) 

[[Prototype]] 내부 슬롯에는 직접 접근할 수 없지만 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입에 간접적으로 접근할 수 있다. 

### __proto__ 접근자 프로퍼티

모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입에 접근할 수 있다. 

getter/setter 접근자 함수를 통해 접근한다. 

이렇게 접근하는 이유는 상호 참조에 의해 프로토타입의 체인이 생성되는 것을 방지하기 위해서다. 

```jsx
const parent = {};
const child = {};
child.__proto__ = parent;
parent.__proto__= child;
// 서로를 참조하기 때문에 에러가 발생.
```

⇒ 프로토타입 체인은 단방향 링크드 리스트로 구현해야 한다. 

하지만, __proto__ 접근자 프로퍼티를 직접 사용하는 것은 권장하지 않는다. 모든 객체가 사용할 수 있는것이 아니기 때문에!! 
**⇒ 참조를 취득하고 싶을 때는 Object.getPrototypeOf 메서드를 사용하고, 교체하고 싶을때는 Object.setPrototypeOf 메서드를 사용하자. (ES5/ES6)**

### Object.prototype

모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여 있다. 자바스크립트 엔진은 객체의 프로퍼티에 접근하려 할 때 객체에 접근하려는 프로퍼티가 없다면 __proto__ 접근자 프로퍼티가 가리키는 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 

최상위 객체는 Object.prototype이다. 

## 함수 객체의 prototype 프로퍼티

함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다. 

⇒ 함수 객체만 prototype 프로퍼티를 소유한다. (일반 객체, 화살표 함수로 생성한 함수, 메서드 축약 표현으로 정의한 메서드는 ㄴㄴ) 

1) __proto__ 접근자 프로퍼티 : 모든 객체가 소유, 모든 객체가 사용, 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용

2) prototype 프로퍼티 : constructor가 소유, 생성자 함수가 사용, 생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용. 

```jsx
// 생성자 함수
function Person(name){
	this.name = name;
}
const me = new Person('Lee');

// 같은 프로토타입을 가리킨다. 
console.log(Person.prototype === me.__proto__); // true
console.log(me.constructor === Person); // true
```

프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다. 

## 프로토타입의 생성 시점

프로토타입은 생성자 함수가 생성되는 시점에 함께 생성된다. (프로토타입과 생성자 함수는 쌍으로 존재하기 때문)

### 1) 사용자 정의 생성자 함수의 프로토타입 생성 시점

일반 함수(함수 선언문,함수표현식)로 정의한 함수 객체는 new 연산자와 함께 생성자 함수로서 호출할 수 있다.

**⇒ 생성자 함수로서 호출할 수 있는 함수, 즉, consturctor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 함께 생성된다.**

```jsx
화살표 함수는 non-constructor로 프로토타입이 생성되지 않는다. 

// 생성자 함수 
function Person(name){
	this.name = name;
}
console.log(Person.prototype); // {constructor: f}
```

함수 선언문은 런타임 이전에 JS 엔진에 의해 먼저 실행된다. 따라서 함수 선언문으로 정의된 생성자 함수는 어떤 코드보다 먼저 평가되어 함수 객체가 된다. (호이스팅) ⇒ 이때 프로토타입도 함께 생성됨.

⇒ 사용자 정의로 생성된 프로토타입은 항상 Object.prototype이다. 

### 2) 빌트인 생성자 함수의 프로토타입 생성 시점

Object, String,Number, Function, Array, Promise 등과 같은 빌트인 생성자 함수도 생성자 함수와 같이 생성되는 시점에 생성된다. 

**⇒ 객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재하고 이후 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 Prototype 내부 슬롯에 할당된다. 즉, 이렇게 프로토타입을 상속 받는다.\**

---

### 1) 객체 리터럴에 의해 생성된 객체의 프로토타입

OrdinaryObjectCreate에 의해 생성되며 obj 객체는 Object.prototype를 상속 받는다.. 

```jsx
const obj = { x: 1 };
```

### 2) Object 생성자 함수에 의해 생성된 객체의 프로토타입

빈 객체 생성 ⇒ OrdinaryObjectCreate 호출 ⇒ Object.prototype

```jsx
const obj = new Object(); // 빈객체
obj.x =1;
console.log(obj.constructor === Object); // true
```

### 3) 생성자 함수 new에 의해 생성된 객체의 프로토타입

new 생성자 호출 ⇒ OrdinaryObjectCreate 호출 ⇒ 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있는 객체다. 

프로토타입에 프로퍼티를 추가하여 하위 객체가 상속받을 수 있고 프로퍼티를 추가/삭제할 수 있다. 이러한 프로퍼티는 즉각 프로토타입 체인에 반영된다. 

```jsx
function Person(name){
	this.name = name;
}
// 프로퍼티 추가
**Person.prototype.say** = function () {
	console.log('say ${this.name});
}
const me = new Person('Lee');
me.say();
```

---

## ⭐️프로토타입 체인

new로 생성한 객체는 생성한 객체의 prototype뿐 아니라(Person.prototype) Object.prototype도 상속받는다. 

즉, 프로토타입의 프로토타입은 언제나 Object.prototype이다.

**⇒ 자바스크립트는 객체의 프로퍼티(메서드 포함)에 접근하려할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 
⇒ 이를 프로토타입 체인이라고 한다. 프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.**  

ex) me 객체 ⇒ Person.prototype ⇒ Object.prototype 순으로 검색함. 

```jsx
call 메서드는 this로 사용할 객체를 전달하면서 함수를 호출한다. this로 사용할 me 객체를 전달하면서
Object.prototype.hasOwnProperty 메서드를 호출한다. 
```

프로토타입 체인의 최상위는 Object.prototype이다.  == 프로토타입 체인의 종점 이라고 부름.

⇒ 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘이다.

```jsx
이에 반해, 프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다. 다시 말해, 자바스크립트 엔진은 함수의 중첩 관계로 이루어진 스코프의 계층적 구조에서 식별자를 검색한다.
따라서 스코프 체인은 식별자 검색을 위한 메커니즘이다. 
```

### 프로퍼티 쉐도잉

프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스로 추가하면 덮어쓰는 것이 아니라 오버라이딩한다. 

⇒ 이처럼 상속 관계에 의해 프로퍼티가 가려지는 현상을 말한다. 

## 프로토타입 교체

교체하면 연결 관계가 파괴되어 Object와 연결??. 따로 연결 설정을 해줘야함. 

---

### instanceof 연산자

```jsx
객체 instanceof 생성자 함수 
function Person(name){
	...
}
const me = new Person('da');

console.log(me instanceof Person) // true
console.log(me instanceof Object) // true

const parent = {};
//프로토타입 교체
Object.setPrototypeOf(me,parent);
// Person과 parent는 연결이 되어 있지 않다. 
console.log(me instanceof Person) // false
console.log(me instanceof Object) // true

// 바인딩 하면 연결된다.
Person.prototype = parent;
console.log(me instanceof Person) // true
```

생성자 함수의 prototype에 바인딩된 객체가 좌변의 **객체의 프로토타입 체인 상에 존재**하면 true, 아니면 false이다. 

하지만, 생성자 함수에 의해 프로토타입이 교체되어 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴되어도 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결은 파괴되지 않으므로 instanceof는 아무런 영향을 받지 않는다. 

---

## 직접 상속

1) Object.create 

직접 객체를 생성하면서 상속을 구현한다. 

```jsx
let obj = Object.create(Object.prototype);

obj=Object.create(Object.prototype, { x : {value:1}});
```

장점

- new 연산자 없이도 객체를 생성할 수 있다.
- 프로토타입을 지정하면서 객체를 생성할 수 있다.
- 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.

2) 객체 리터럴 내부에서 __proto__에 의한 직접 상속 

깔끔한 방법은 아님. 

```jsx
const obj = [
	y:20,
	__proto__: myProto
}
```

---

### 정적 프로퍼티/메서드

생성자 함수로 인스턴스를 생성하지 않아도 참조/호출 할 수 있는 프로퍼티/메서드를 말한다. 

```jsx
Person.staticProp = 'adf'
Person.staticMethod = function () {}

```

⇒ 하지만, 인스턴스로 접근할 수 없다. this를 사용하지 않는다면 (인스턴스를 참조할 필요가 없다면) 정적 메서드를 사용해도 된다.

---

## 프로퍼티 존재 확인

1) in 연산자 , Reflect.has(ES6)

```jsx
key in object

const person = {
	name: 'kim',
}

console.log('name' in person); // true
console.log('toString' in person); // true => 프로토타입 체인에 의해서 Object.prototype이라 가능.

//ES6 Reflect
console.log(Reflect.has(person,'name')); // true
```

2) Object.prototype.hasOwnProperty

상속받은거는 안친다.

```jsx
console.log(person.hasOwnProperty('name')); //true 
console.log(person.hasOwnProperty('toString')); //false => 상속받은건 ㄴㄴ
```

---

## 프로퍼티 열거

1) for ... in

객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 Enumerable의 값이 true인 프로퍼티만 순회해서 열거한다. (toString은 Enumerable이 false라 안나옴, symbol도 안나옴) 

```jsx
for (const key in person) {
	console.log(key + ': '+person[key]);
}
```

2) for...of / Array.prototype.forEach 

배열은 위를 사용하기를 권장. 

```jsx
const arr = [1,2,3];
arr.x = 10; // 배열도 객체라 프로퍼티를 가질 수 있다. 

for(const i in arr) {
	// 1 2 3 10
}

arr.length; // 3

// forEach는 메서드 요소가 아닌 프로퍼티는 제외.
arr.forEach(v => console.log(v)); // 1 2 3 

for(const v of arr) {
	.. // 1 2 3 
}
```

3) Object.keys/values/entries

객체 자신의 고유 프로퍼티만 열거하기 위해 사용

```jsx
const person = {
	name: 'Kim',
	__proto__: {age: 20},
}

console.log(Object.keys(person)); // ["name","address"]

console.log(Object.values(person)); // ["kim"]
console.log(Object.entries(person)); // [["name","kim"]
Object.entries(person).forEach(([key,value]) => console.log(key,value)); // name kim 
```
