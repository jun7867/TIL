# JS에서 Html,Css 요소 접근하기

## ClassList

자바스크립트에서 html 요소에 접글할 수 있다.

classList.add 는 클래스에 삽입하는 것.

classList.remove 는 클래스에서 제거하는 것.

classList.contains 는 값이 존재하는지 체크하는 것.

```jsx
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);

  if (!hasClass) {
    title.classList.add('active');
  } else {
    title.classList.remove('active');
  }
}
```

그리고 classList.toggle()은 이 모든걸 한번에 해결할 수 있다.

```jsx
function handleClick(){
 title.classList.toggle('active');
}
```

ClassList를 잘 활용하면 클릭했을 때 다른 효과를 주거나 intersectionObserver를 사용하면서 효과를 주고 싶을때 등 다양하게 활용 가능하다.

