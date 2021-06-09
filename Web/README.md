<추가 신입 프론트엔드 면접 질문 리스트>
https://velog.io/@honeysuckle/%EC%8B%A0%EC%9E%85-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%AA%A8%EC%9D%8C

## React vs Vue
공통점
- 가상 DOM을 사용하여 변경된 객체만 업데이트하여 효율적으로 DOM을 관리한다. 
- 컴포넌트 기반 UI다. 코드 재사용을 높인다.
- View에 초점을 맞춘다.
- cli, webpack 제공
- redux, vuex 상태관리 제공 


### React
- React는 HTML을 사용할 수 없고 JSX만 있다.
- Vue보다 더 많은 사용자와 커뮤니티가 조성되어 있어서 자료가 많다.
- 단방향 바인딩 (model -> view)
- 높은 자유도, 유연한 개발 방식

### Vue
- Vue는 HTML 템플릿, JSX 사용 가능하다. 따라서 초보자도 쉽게 만들 수 있고 디자이너와 공동 작업도 react보다 좋다.
- 쉬운 학습 곡선 등으로 중소 규모 앱에 효율적이다. 
- 특정 페이지에서만 복잡한 상태관리 가능
- 양방향 바인딩 (model <--> view)
- 높은 호환성


## SPA

1) SPA 개념
SPA : 단일 페이지 애플리케이션

데스크탑에 비해 성능이 낮은 모바일에서도 빠른 접근을 위해 SPA방법 등장. 최초 한번 페이지 전체를 로딩한 이후 데이터만 변경하여 사용.

기존의 SSR방법은 요청 시 마다 새로고침이 일어나며 페이지 로딩시 서버로부터 리소스를 받는 방식때문에 문제가 있었고 CSR방식이 생겼다.

-기존방식 : link를 통해 refresh (매 동작마다 페이지 새로고침과 리렌더링)

-SPA : 한 페이지에서 리렌더링 없이 필요한 동작 수행
이런 성능적인 측면으로 User 의 입장에서 native-app을 이용하는 경험을 얻음.(실제로 배포도 가능. ionic, react-native 등)

2) SPA 단점
- 검색엔진 최적화 (SEO) 잘 안됨.
 : 초기 렌더링 시 얻는 HTML가 실제 컨텐츠를 포함한 HTML이 아닌 경우가 많기 때문 
 
- 초기 로딩 속도가 느리다.
: 처음에 모든 정적 리소스를 모두 불러옴
 
=> SEO를 최적화 하기 위해 첫 번째 페이지 로딩시 로딩 속도가 빠른 SSR을 사용하고, 이후 페이지에서는 CSR을 활용하는 방식을 많이 사용한다.

## ssr vs csr
- MPA/SPA는 페이지를 여러개 쓰는지, 한개를 쓰는지에 대한 개념.
- SSR/CSR은 렌더링을 서버에서 하는지, 클라이언트에서하는지에 대한 개념.

### SSR (주로 MPA)
- 서버 사이드 렌더링으로 페이지가 새로고침 될 때마다 서버로부터 리소스를 전달받아 화면에 렌더링한다.
- SEO에 문제가 없다. 


### CSR (주로 SPA)
- 서버는 단지 JSON 파일을 보내주는 역할만 한다. HTML 그리는 역할은 클라이언트가 수행
- JS가 모든 동작을 수행한 후에 화면이 나타나기에 초기 구동속도는 SSR보다 느리다.
- SEO가 좋지 않다. 
=> React에서는 Next.js, GatsbyJS, VUE에서는 Nust.js등의 라이브러리가 SPA에서 SEO를 할 수 있도록 도와준다.

### SEO
- 검색 엔진 최적화로 웹 페이지를 검색 결과 상위에 나올수 있게 하는 작업.
- SPA경우 SEO가 좋지 않다. 

https://asfirstalways.tistory.com/244

## 브라우저의 동작 원리
1) HTML 마크업 처리, DOM 트리 빌드 ("What")
2) CSS 마크업 처리, CSSOM 트리 빌드 ("HOW")
3) DOM 및 CSSOM 결합 => 렌더링 트리 ("화면에 그려질 것 결정")
4) 렌더링 트리에서 레이아웃 실행 (부모에서 자식 순서로 배치)
5) Paint

## DOM

## CORS
[CORS 테크톡을 참고하여 요약했습니다.]
https://www.youtube.com/watch?v=-2TgkKYmJt4
![](https://images.velog.io/images/jun7867/post/7f1c7026-9c15-4915-ae50-841dbea422a4/image.png)
요청을 보내기 위해서는 보내고자 하는 대상과 프로토콜, 포트번호가 같아야 한다. 
http://localhost 와 동일한 url
= http://localhost:80
= http://localhost/api/cors

> SOP가 필요한 이유 
- SOP : 다른 출처의 리소스를 사용하는 것에 제한하는 보안 방식.
- 해커가 만약 다른 Origin으로 접속을 시도하면 SOP에 의해 제한된다. 

> 그렇다면 다른 출처의 리소스가 필요하다면??
=> CORS (Cross-Origin Resource Sharing)
- 추가 HTTP 헤더를 사용하여, 한 **출처**에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 **브라우저**에 알려주는 체제.

**CORS 접근제어 시나리오**
_1) 프리플라이트 요청 (Preflight Request)_
- 사전 확인 작업 ( Options 메서드를 통해 다른 도메인의 리소스에 요청이 가능한지 먼저 확인한 후에 가능하다면 요청을 보낸다.)
![](https://images.velog.io/images/jun7867/post/77a2fb8a-9430-4fd7-8015-7d6e9fc45b5e/image.png)
![](https://images.velog.io/images/jun7867/post/2f3a03e8-52d7-4e69-bb4e-3b110cba6813/image.png)
- Origin (요청 출처), 실제 요청 메서드(post..), 실제 요청의 추가 헤더를 Request로 보낸다.
- Origin (서버측 출처, 허가 메서드 , 허가 헤더, preflight 응답 캐시 기간)을 Response로 받는다. 응답 코드는 200대 여야 하며, 응답 바디는 비어있는 것이 좋다.

_2) 단순 요청 (Simple Request)_
- Preflight 요청 없이 바로 요청을 날린다.
- 단, GET,POST,HEAD 메서드 중 하나여야 하며 Content-Type, Header도 조건이 있다. 이 조건을 만족해야만 Simple로 날릴 수 있다.
![](https://images.velog.io/images/jun7867/post/2423e9df-61c8-4af6-81ec-f30d7653d373/image.png)

> **Q. 그렇다면 왜 Preflight가 필요한걸까?? Simple이면 편한데??** 
CORS spec이 생기기 이전에 만들어진 서버들은 브라우저의 SOP Request만 가능하다는 가정하에 만들어 졌는데, cross-site request가 CORS로 인해 가능해졌기 때문에 보안 메커니즘이 따로 없다보니 문제가 생길 수 있어서 이런 서버를 보호하기 위해 preflight request를 포함했다. 
=> 즉, Preflight request로 서버가 CORS를 인식하고 핸들할 수 있는지 먼저 확인함으로써 CORS를 인식하지 못하는 서버들을 보호할 수 있게 해준다. (CORS 설정이 없으면 ALLOW-ORIGIN이 없기에 사전에 확인해서 서버를 보호하기 위해)

3) 인증정보 포함 요청 (Credentialed Request)
- 인증 관련 헤더를 포함할때 사용하는 요청
- 쿠키, JWT같은 토큰을 클라이언트에서 자동으로 담아서 보내고 싶을 때 credentials을 include하게 되면 서버 측까지 전달할 수 있다. 단, 서버측에서도 Access-Control-Allow-Credentials을 true로 해줘야 한다. 단, 출처를 *로 모든 것을 허용하면 에러가 발생한다. 정확한 origin만을 줘야 한다.) 

**CORS 해결 방법**
1) 프론트 프록시 서버 설정 (개발 환경)
![](https://images.velog.io/images/jun7867/post/581c7ce1-2ff6-4d72-a4cd-78677a060561/image.png)
- 브라우저가 프론트 서버에 보내는 Origin, target 포트는 같다. (same origin)
- 프론트 서버에서는 Target을 바꿔서 보내주면 브라우저 입장에서는 same origin이라 에러가 안난다. 

2) 직접 헤더에 설정
3) 스프링 부트 이용
- @CrossOrigin에서 origin port로 설정
- 또는, Configuration으로 전역적으로 Origin 설정

## 크로스 브라우징
웹 표준에 따라 개발을 하여 서로 다른 OS나 다른 플랫폼에 대응하는 것.
브라우저의 렌더링 엔진이 다른 브라우저에서도 구현되도록. 
공통 요소를 사용하여 웹 페이지를 제작 (IE, 크롬, 사파리..)
https://asfirstalways.tistory.com/237

=> Babel + Webpack 사용해서 처리

## 웹팩이란?
- 프로젝트에 필요한 모든 모듈을 매핑한다.
- 최신 JS 어플리케이션을 위한 정적 모듈 번들러. (*모듈 번들러: 여러개로 나뉜 파일을 하나로 묶는것)
![](https://images.velog.io/images/jun7867/post/a77c8e94-bdaf-49a8-9189-c176e1665873/image.png)
## Babel?
- 코드를 변화시키는 트랜스파일러
- 크로스 브라우징 이슈를 해결하기 위해 생긴 툴, 하위 버전으로 변환시켜 모든 브라우저에서 동작할 수 있도록 호환성을 지켜준다. 


## 쿠키와 세션, 로컬 스토리지
웹 스토리지는 로컬스토리지와 세션 스토리지가 있다. 둘다 서버에 데이터를 저장하지 않으며 로컬 스토리지는 브라우저에 정보가 계속 남아잇고, 세션은 해당 세션이 끝나면(브라우저가 닫히면) 데이터가 사라진다. 단, HTML5부터 지원한다.

웹에서 로그인을 하기 위해 토큰을 받아서 API를 호출해야 한다. 하지만 반복되는 작업은 비효율적이기에 쿠키를 서버와 클라이언트에 생성하여 투키만 가지고 서버에 요청할 수 있도록 한다. 단, 저장공간이 작은편.


## Progressive Rendergin
- 컨텐츠를 가능한 빨리 표시하기 위해 성능 향상, 인터넷 속도가 느리거나 불안정할때 주로 사용.
=> 페이지 로딩(스크롤 시에만 이미지 로드)


## BEM (Block Element Modifier)
CSS class name 규칙

- tab__item--focused
=> tab : block, item : element, focused : modifier


## Sementic tag
- div가 아니라 의미있는 태그를 사용. (header, table, article...)

## HTML5 tag
- html (최상단)
- head (style,title,meta,link)
- body

## CSS
https://devowen.com/272?category=778540

---
# Back-end

## Servlet 
(내용, 그림 참고 링크 [10분 테코톡]: https://www.youtube.com/watch?v=calGCwG_B4Y)
- 웹 서버에 프로그램을 붙여서 동적인 페이지를 생성하기 위해 사용.
- HTTP 요청과 응답을 모두 처리하고 규약을 지키며 응답으로 보내는 과정은 개발자가 모두 하기에는 부담이 있다. Servlet의 http servlet request 메소드를 사용하여 개발자가 로직(service)에만 집중할 수 있게 도와준다. 
- 즉, 서비스 메서드만 재정의해서 처리해준다. 

### Servlet 컨테이너
1. Servlet Request / Servlet Response 객체 생성
2. 설정 파일을 참고하여 매핑할 Servlet 확인
3. 해당 서블릿 인스턴스 존재 유무를 확인하고 없으면 생성
4. Servlet COntainer에 스레드를 생성하고, res,req를 인자로 Service 실행.
5. 응답을 실행한 res,req 제거. (Servlet은 싱글톤 객체라 소멸하지 않는다)

- 여러 요청이 들어오면 멀티스레드로 처리 한다.

=>서블릿 컨테이너는 서블릿 생명주기를 관리함.

### Dispatcher Servlet과 Spring
![](https://images.velog.io/images/jun7867/post/a43c007a-840d-492d-9ed9-2495226c17de/image.png)
- 모든 요청을 받은 전면 서블릿을 Dispatcher Servlet이라고 한다. 이 서블릿을 하나만 두고 모든 요청을 다 받아서 처리 핸들러에 위임.
![](https://images.velog.io/images/jun7867/post/5d841f61-604e-46e6-a05a-76addd4f23be/image.png)

=> 이렇게 많은 처리를 해줘야 하지만, Spring을 사용하면 핸들러 맵핑, 어댑터, 뷰 리솔브는 스프링 컨테이너(스프링 IoC)로부터 주입을 받아서 처리할 수 있고, _**개발자는 처리 핸들러에만 집중할 수 있다. **_ 

> 즉, 스프링으로 웹 요청 처리한다는 것은 스프링 MVC에서 제공하는 Dispatcher Servlet과 웹 요청 처리 관련 구현체들을 사용할 수 있고, 스프링 IoC를 사용하여 개발할 수 있다. 최종적으로 개발자가 핸들러에만 집중할 수 있게 도와준다. 

### 추가 학습 방향
1. 웹 서버와 웹 어플리케이션 서버
2. WAS가 멀티 스레드 관리하는 방식
3. 스프링 설정 파일과 서블릿 설정 파일
4. 스프링 컨테이너에 빈을 등록하는 방법/ 컨테이너가 주입 위치를 찾는 방법
5. 디폴트 서블릿
6. 스프링과 스프링부트

## Java + Spring 질문
https://geminihoroscope.tistory.com/90

https://kim6394.tistory.com/161
https://ktko.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8%EC%9E%90%EB%B0%94-%EC%8A%A4%ED%94%84%EB%A7%81

## REST API
https://meetup.toast.com/posts/92
https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html

## DB
https://kadamon.tistory.com/21
https://syujisu.tistory.com/120


---
참고 링크
> https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/FrontEnd


JS
https://devowen.com/276?category=778540
