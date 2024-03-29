### 클로저

- 내부함수와 LexicalEnvironment의 조합
- 실행컨텍스트 A의 LexicalEnvironment와 그 내부 함수 B의 조합에서 나타나는 특별한 현상

⇒ **컨텍스트 A에서 선언한 변수를 내부함수 B에서 참조할 경우에 발생하는 특별한 현상
⇒ 컨텍스트 A에서 선언한 변수 a를 참조하는 내부함수 B를 A의 외부로 전달할 경우, A가 종료가 되어도 a가 사라지지 않고 유지되는 현상이다. (클로저의 핵심)**

즉, 지역변수가 함수가 종료되어도 사라지지 않게 할 수 있다. 그런 지역 변수를 만들 수 있다.

---

### 클로저 핵심

1. 함수 종료 후에도 사라지지 않고 값을 유지하는 변수
2. 외부로부터 내부 변수 보호 (캡슐화) - (setter없이는 영향x)

⇒ 함수 종료 후에도 사라지지 않는 지역변수를 만들 수 있다. 

---


A의 outerEnvironmentReference는 모두 접근 가능하며, B의 environmentRecord는 B에서만 접근 가능하기 때문에 연관이 없다. 

A의 environmentRecord와 B의 outer...가 연관이 있다.
