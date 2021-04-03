## JavaScript Engine
**Memory Heap** : 변수를 선언해서 오브젝트 할당, 문자열, 숫자 할당시 데이터들이 메모리 Heap에 저장됨. 아무곳이나 저장되어 있다.

**Call** **Stack**: 함수를 실행하는 순서에 따라 차곡차곡 쌓인다.(스택-Last In First Out)

ex) main → frst → second → first → main

## JavaScript Runtime Environment
**Event Loop(감시자)**는 루프를 돌면서 Call Stack과 Task Queue를 확인한다. 

⇒ Call Stack에 일이 있으면 비어질때 까지 기다린다. 

⇒ 다 비어지게 되면 그때 **Task Queue**에 있는 콜백을 **Call Stack**으로 가져와서 자바 스크립트 엔진에서 실행한다. (buffer 같은 역할)

**Call Stack에서 실행되는 것은 끝날 때까지 보장이 된다!!**

# Task Queue

- Call back 함수들 (클릭, setTime)

# Microtask Queue

- **프로미스에 등록된 콜백** (프로미스가 다 수행이 된 후 **then**에 등록된 콜백 함수)
- mutation observer일 경우

# Render

- 주기적으로 브라우저에 업데이트 해주는 것. (애니메이션..)
- **Request Animation Frame**를 통해서 콜백을 등록해 놓으면 브라우저가 업데이트 되기 전에 이 콜백을 실행한다는 뜻이다.
- Request Animation Frame ⇒ Render Tree ⇒ Layout ⇒ Paint

---

### 어떻게 이게 가능한가??

- Event loop가 빙글빙글 돌다가 Call Stack에 있는 콜백함수가 끝날때까지 머무르면서 기다린다. (업데이트가 멈춘다)
- 콜백 함수가 끝나면 다시 돈다.
