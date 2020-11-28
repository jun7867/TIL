# class

-**template.** , 붕어빵 틀

-no data : 데이터는 실제로 없고 틀만 만들어줌.

-연관있는 것들을 한곳에 묶어 주는 것.

-fields + methods.

```jsx
class Person {
	//constructor
	constructor(name,age) {
		this.name=name;
		this.age=age; // this.age는 getter 호출, = age는 setter를 호출
	}
	//methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
	//getter
	get age() {
		return this._age; // _를 붙이는 이유는 getter가 호출되면서 계속 반복되기 때문에 이름을 다르게 해줘야 함.
	}
	//setter (사용자가 이상한값 못넣게 하기 위해)
	set age(value) {
		this._age=value < 0 ? 0 : value;
	}
} 
```

# Object

-팥 붕어빵, 크림 붕어빵 

-data in

-**instance of a class**

-created many times

object = { key : value } 

오브젝트는 선언 후에 삭제 및 추가가 가능하지만 시스템이 불안정해지기 때문에 되도록 하지 않는다. 

(runtime에 결정됨)

```jsx
//object 생성
const jun=new Person('jun',26)
console.log(jun.name);
jun.speak();
```

```jsx
const obj1 = {} // 'object literal'
const obj2 = new Object(); // 'object constructor'
const jun = {name:'jun', age:26}

// 2. Computed properties
// key 는 string 타입이여야 한다.
console.log(jun.name);
console.log(jun['name']); // 동적으로 key에 대한 value를 받아올때 주로 사용됨.
```

```jsx
// 3. Property value shorthand ( key와 value에 이름이 동일하면 하나 생략 가능)
const person = makePerson('jun',24)
function makePerson(name,age) {
	return {
		name, // same => name: name,
		age,  // same => age : age,
	}
}

// 4. Constructor function ( 다른 계산을 안하고 object만 생성하는 함수 => 대문자, return x)
function Person(name,age) {
	// this = {};
	this.name =name;
	this.age = age;
	// return this;  생략
}
```

```jsx
// 5. in operator: property existence check (key in obj)
// 키가 있는지 없는지 확인
console.log('name' in jun); // true or false or undefined
```

```jsx
// 6. for ..in vs for .. of
// for (key in obj)
for (const key in jun) {
	console.log(key); // key들 출력
}
// for (value of iterable) 배열에서
const array=[1, 2, 3]
for (value of array) {
	console.log(value); // value 출력
}
```

```jsx
// 7. Fun cloning
// Object.assign(dest, [obj1,obj2,obj3...])
const user = {name: 'jun', age: '20'}
const user2 = user; // 이러면 user가 변하면 user2 둘다 동일하게 변한다. reference가 동일해서
const user3 = Object.assign({},user); // reference가 다름.
```

## static

```jsx
class Article{
	static publisher = 'D';
	constructor(articleNumber){
		this.articleNumber = articleNumber;
	}
	static printP() {
		console.log(Article.publisher);
	}
}
const a1=new Article(1);
console.log(a1.publisher) // => X . stactic으로 되어있기에 Class. 으로 해야함
console.log(Article.publisher) // ==> O
Ariticle.printP(); 
```

TypeScript에서 많이 사용되며 오브젝트에 상관없이 공통적으로 사용되는 경우에 자주 사용된다. (메모리 사용을 줄여줌)

 

## Inheritance

Class에서 정의한 속성 상속 가능 (공통된 부분 재사용 가능)

![image](https://user-images.githubusercontent.com/36908476/100520540-990b7680-31e1-11eb-8078-61a136bb244d.png)
## 다양성 (override)

공통된 속성 + 따로 바꾸고 싶은 부분만 정의하면 사용 가능하다. 

super.method() 를 하게되면 부모에서 정의한 부분도 함께 사용 가능하다. 

![image](https://user-images.githubusercontent.com/36908476/100520533-96108600-31e1-11eb-92c8-95ca7f3beb18.png)
