# scroll

## 1. wheel
Scroll은 전체적인 스크롤 움직임을 모두 감지한다

만약에 사용자가 직접 마우스 휠로 움직일 경우에만 이벤트를 주고 싶다면 wheel을 사용하면 된다.

```
window.addEventListener("wheel", () => {
  console.log('wheel');
}
```
## 2. 스크롤이 맨 위, 맨 아래 확인

```jsx
if (window.scrollY === 0) {
    // 맨 처음일때
  } else if (
    window.scrollY + window.innerHeight === document.body.clientHeight){
	// 맨 마지막일때
}
```
