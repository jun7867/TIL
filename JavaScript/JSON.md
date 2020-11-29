# JSON (JavaScript)

## HTTP , AJAX, XML, JSON ??
HTTP : 브라우저 위에서 동작하는 Client가 Server와 통신하는 방법

AJAX : 웹 페이지에서 서버에서 동적으로 주고 받는 기술 (XHR)

fetch API : 익스플로어에서는 동작 X.

XML : 마크업 언어중 하나. (AJAX XHR에서 사용) 

⇒ 파일 사이즈가 크고 가독성이 낮음.

⇒ 그래서 뭘 쓴다? JSON을 쓴다!

JSON (JavaScript Object Notation)

- key와 value로 이루어짐. 간단하고 가볍다. 가독성이 좋다. 서버와 주고받을때 serialization으로 진행되며 플랫폼이나 프로그래밍 언어와 상관없이 사용 가능하다.

## Object to JSON (stringify)

```jsx
let json = JSON.stringify();
// Symbol이나 method는 변환되지 않는다.

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	jump() => {
		console.log('jump');
	}
}
json = JSON.stringify(rabbit,['name','color']); // name과 color만 변환된다.
josn = JSON.stringify(rabbit, (key, value) => {
		return key === 'name' ? 'jun' : value;
}); // callback함수를 쓰면 좀 더 세밀하게 컨트롤 할 수 있다.
```

 

## JSON to Object (parse)

```jsx
json = JSON.stringify(rabbiy);
const obj = JSON.parse(json); // 단, jump() 함수는 포함되지 않는다.
// Date()도 string형태로 들어오기 때문에 콜백함수로 컨트롤 해줘야 한다.

const obj = JSON.parse(json, (key,value) => {
	return key==='brithDate' ? new Date(value) : value;
});

```
