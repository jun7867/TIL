## Generics
- 사용할때 타입이 결정되어서 타입이 보장된다.

```tsx
// => Generics (어떤 타입이든 받아서 사용할때 타입이 결정된다.) => Good! 
function checkNotNull<T>(arg: T | null): T{
    if(arg==null)
        throw new Error('not valid number');
    
    return arg;
}

const number = checkNotNull(123);
const bool: boolean = checkNotNull(true);
console.log(number);
```

## class에 generic 적용

```tsx
// either : a or b
// 무슨 타입인지는 지금은 모르지만 사용될때 결정된다.
interface Either<L, R> {
    left: () => L;
    right: () => R;
}

class SimpleEither<L, R> implements Either<L,R> {
    constructor(private leftValue: L, private rightValue: R){}
    left(): L {
        return this.leftValue;
    }

    right(): R {
        return this.rightValue;
    }
}

const either: Either<number,string> = new SimpleEither(4,'Hi');
console.log(either.left()); // 4
console.log(either.right());  // Hi
```

## Generic extends

- **<T extends 00> :** Generic 이긴 하지만 00를 확장한 것만 가능하다

```tsx
interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("Full time work");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("Part time work");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수 => Bad!
// 이렇게 Employee로 받게 되면 full과 part의 속성을 잃어버린다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// Generic 이긴 하지만 Employee를 확장한 것만 가능하다.
function pay**<T extends Employee>**(employee: T): T {
  employee.pay();
  return employee;
}

// 함수식 표현
// const pay = <T extends Employee>(employee: T): T => {}

// Test
const jun = new FullTimeEmployee();
const bob = new PartTimeEmployee();
jun.workFullTime();
bob.workPartTime();
const junAfterPay = pay(jun);
const bobAfterPay = pay(bob);
```

## Object의 key를 받는 Generic

- <T, K extends keyof T> : T라는 object의 key만을 받는 K
- T[K] : object에 포함된 value 타입만 return 가능.

```tsx
/**
 * object의 key Generic 예시
 * T에 있는 key의 type => keyof T
 */
function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const obj = {
  name: "jun",
  age: "27",
};

const obj2 = {
  animal: "dog",
};

console.log(getValue(obj, "name")); // jun
console.log(getValue(obj, "age")); // 27
console.log(getValue(obj2, "animal")); // dog
```
