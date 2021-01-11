# Stack 
## 선언
```java
import java.util.Stack; //import
Stack<Integer> stack = new Stack<>(); //int형 스택 선언
Stack<String> stack = new Stack<>(); //char형 스택 선언
```

## 추가 삭제
```java
stack.push(3);     // stack에 값 3 추가
stack.pop();       // stack에 값 제거
stack.clear();     // stack의 전체 값 제거 (초기화)
```

## 가장 상단 출력
```java
stack.lastElement()
stack.peek();     // stack의 가장 상단의 값 출력
```

## 사이즈, 비어있는지 확인

```java
stack.size();      // stack의 크기 출력 : 2
stack.empty();     // stack이 비어있는제 check (비어있다면 true)
stack.contains(1) // stack에 1이 있는지 check (있다면 true)
```


# Queue
## 선언
```java
import java.util.Queue; //import
Queue<Integer> q = new LinkedList<>(); //int형 스택 선언
```

## 사용
```
q.poll() // 제일 앞에 있는 값 꺼내기
q.peek() // 제일 앞에 있는 값 보여주기
```

## max값 구하기
```
Collections.max(queue);
```
