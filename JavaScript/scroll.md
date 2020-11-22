# scroll

## wheel
Scroll은 전체적인 스크롤 움직임을 모두 감지한다

만약에 사용자가 직접 마우스 휠로 움직일 경우에만 이벤트를 주고 싶다면 wheel을 사용하면 된다.

```
window.addEventListener("wheel", () => {
  console.log('wheel');
}
```
