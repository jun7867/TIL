this는 함수가 호출될 때 결정된다. (동적으로 결정) 

### 1. 전역공간

**전역 공간에서의 this는 전역 객체를 가르킨다.**

- window(브라우저) / global (node)
- host 객체 (런타임에 따라서 전역객체의 정보가 달라진다.)

### 2. 함수 호출 시

**함수를 호출 시에도 전역 객체를 가르킨다. (window/global)**

주의 ) 호출한 주체가 전역 객체가 아닌 함수여도 함수 호출 시에는 This가 전역 객체를 가르킨다. 

⇒ 즉, 호출한 형태가 함수로써 호출 했으면 this는 전역 객체를 가르킨다. 
c() , b() .. 

### 3. 메서드로써 호출

**메서드를 호출한 주체가 this가 된다.** 
a.b() 면 a가 this가 된다.

a.b.c()면 a.b가 this가 된다.

obj[’func’]()면 obj가 this가 된다.


### 3-1 메서드 내부 함수에서 같은 this 사용하기

JS에서는 내부 함수에서 this가 전역 객체를 가르키기 때문에 call이나 bind를 사용해서 명시적으로 지정해 주거나 this를 저장한 변수를 사용하여 우회한다. 이를 통해 method에서 사용하는 this와 동일하게 사용할 수 있다. self, _this, that.. 으로 쓰인다.


ES6에서는 arrow function을 사용해서 해결할 수 있다. arrow function은 This를 바인딩 하지 않아서 상위에 있는 this를 바로 사용 가능하다. 

### 4. callback 호출 시

기본적으로 함수 내부에서와 동일.

thisArg는 this를 명시적으로 선언할때 필요한 인자이다.

callback함수 시에는 넘겨주는 this에 따라서 달라진다. 

### 5. 생성자 함수 new 호출 시

생성자 함수로써 호출한 인스턴스 객체가 this가 된다. 

---


(참고: 정재형 코어 자바스크립트) 
