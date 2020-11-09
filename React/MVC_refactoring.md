# MVC
MVC는 Model View Controller 의 약자. 

3가지 형태로 역할을 나누어 개발하는 방법. 

비지니스 처리 로직과 사용자 인터페이스 요소들을 분리시켜 서로 영향없이 개발하기 위해 사용한다.

사용자가 controller를 조작하면 controller는 model을 통해서 데이터를 가져오고 그 정보를 바탕으로 시각적인 표현을 담당하는 View를 제어해서 사용자에게 전달한다.

![image](https://user-images.githubusercontent.com/36908476/96692513-13660100-13c1-11eb-9abd-f7d221ada6a9.png)

MVC 패턴의 자세한 설명은 다른 페이지에서 .. [참고자료](https://m.blog.naver.com/jhc9639/220967034588)

## React 에서의 MVC 패턴
React는 MVC에서 V인 view만 담당한다. 따라서 React component에서 네트워크 통신이나 비즈니스 로직을 처리하게 만들면 안된다.

따라서 Class를 따로 만들어놓고 dependancy를 주입해줘야 한다.

-React에서는 service라는 폴더를 따로 만들어서 네트워크 처리를 따로 하고 index.js에 객체를 생성하고 app.js(사용하려는 곳)에 객체를 넘겨준다.

index.js에 만드는 이유는 객체를 한번만 만들기 위해서이다


## API Key 관리
.env 라는 파일을 젤 상위 위치에 만들고 
```
React_APP_APP_KEY=[Key...]
```
사용할 때는 process.env.REACT_APP_API_KEY 이렇게 호출하면 된다.

그리고 github .env를 커밋하지 않기 위해서 **.gitignore 파일에 .env를 추가해준다!!** (KEY가 노출되면 큰일남)
