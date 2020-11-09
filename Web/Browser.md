# Browser 구조

**Window**:  브라우저에서 현재 열려있는 전체적인 창을 의미한다.

**Document**: 페이지가 표기되는 부분

**Navigator:** Window에 관련된 브라우저에 대한 정보가 담겨있다.

## Window
Window의 자식으로 Dom(document 관련), BOM(navigator, location, frames, screen,fetch, stroage..), JavaScript(Array, Map, Date..)가 있다.
![image](https://user-images.githubusercontent.com/36908476/97084860-b4201f00-1654-11eb-9603-ba9a0d100095.png)

즉 DOM은 document(body,img..) , BOM은 browser 관련된 것들이 있다.

## DOM
![image](https://user-images.githubusercontent.com/36908476/97084906-f77a8d80-1654-11eb-8985-339d619e94cd.png)
웹 문서를 브라우저에 렌더링 하려면 브라우저가 이해할 수 있는 구조로 메모리에 올려야 하는데 이것이 DOM 구조이다. 

모든 요소와 요소의 속성, 텍스트를 각각의 객체로 만들어 트리구조로 구성한것이다.


### Window 사용
API를 호출함으로써 브라우저에 있는 다양한 기능들을 쓸 수 있다. 

기본적으로 Window는 글로벌 오브젝트이기 때문에  바로 window 관련한 API를 사용해도 된다.

따라서 window.innerWidth라고 사용하지 않아도 innerWidth만 해도 사용 가능하다.

⇒ 윈도우는 주로 size나 scroll, 페이지 로드 여부 등에서 주로 사용된다.

**Document**

[https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

**Window**

[https://developer.mozilla.org/en-US/docs/Web/API/Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

**Viewport**

[https://developer.mozilla.org/en-US/docs/Glossary/layout_viewport](https://developer.mozilla.org/en-US/docs/Glossary/layout_viewport)

**Navigator**

[https://developer.mozilla.org/en-US/docs/Web/API/Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
