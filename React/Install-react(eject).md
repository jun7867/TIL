## Create React app 설치

[create-react-app](https://create-react-app.dev/docs/getting-started/)

```jsx
yarn create react-app my-app
```

```jsx
yarn eject  #무엇이 설치되어 있는지 확인 가능 (단, 한번 분리하면 다시 결합 못함)
yarn start # react 시작 (==react-scripts start)
```

![image](https://user-images.githubusercontent.com/36908476/96291804-93881180-1023-11eb-924f-35659c4298bb.png)


.gitignore : 버전관리에 포함이 되면 안되는 것들 (build,dependencies 등등)이 들어있다.

package.json : npm 버전 외부 라이브러리 관리 (dependencies-외부 라이브러리)

yarn.lock : yarn 관리

node_modules : library들이 저장되어 있음.

public : 외부적으로 보여지는것들.

![image](https://user-images.githubusercontent.com/36908476/96291822-9d117980-1023-11eb-9153-49b6825b978e.png)


manifest.json : 모바일(웹 어플리케이션)을 할때 필요함.

---

## Eject를 하고 분리되는 것들.. (React 안에 숨겨져 있는 툴)

### **BABEL**

-javaScript transcompiler (ECMA 2015 → older version)으로 바꿔줌. + (TS,JSX → JS)

(최신 문법들을 기존 브라우저에서 이해를 못하기 때문에 오래된 버전으로 바꿔주는것.)

따라서 ES6 에 있는 arrow function이나 class, enhanced object literals, template strings, destructure, const & let 을 사용 가능

추가로 babel은 문법을 변환해 주는 역할만 하기에 babel-polyfill 을 사용해 런타임에도 실행 되도록 해야 브라우저에서 잘 적용된다.

### **Webpack**

-Bundling the code, JavaScript module bundler 

-번들링 == 이미지,소스코드 ⇒ 번들 단위로 묶어서 사용자에게 간편하게 제공. 

-변수,함수들의 이름을 바꿔줌(외부에서 접근 못하게)

- 코드의 양이 많아지면 코드의 유지보수를 위해 모듈로 잘 나눠줘야 한다. 하지만, JS는 모듈 시스템을 지원하지 않기에 Webpack을 사용한다. 모듈 시스템 구성, 로더, 빠른 컴파일 등등 많은 곳에서 사용

[Naver N2 Webpack 설명](https://d2.naver.com/helloworld/0239818)

### ESLint

-checking code (코드의 문제가 있으면 미리 알려줌)!!! 엄청 유용함

https://jeonghwan-kim.github.io/series/2019/12/30/frontend-dev-env-lint.html

### Jest

-unit test framework.


### PostCSS

- JS 플러그인을 사용해 CSS를 변환시키는 툴이다.

-제공하는 CSS를 브라우저가 이해할 수 있는 CSS를 바꿔줌.

-SCSS보다 많은 플러그인이 있어서 엄청 유용하다. 또한, CSS 표준 문법을 사용하기에 SCSS처럼 새로 배울 필요가 없다.

---

## 크롬 확장판 
![image](https://user-images.githubusercontent.com/36908476/96291896-badede80-1023-11eb-9bd2-d15a5b6d20cb.png)

**VS 확장**

![image](https://user-images.githubusercontent.com/36908476/96294036-b36d0480-1026-11eb-96bc-f3791c35b729.png)

-Reactjs code snippets


![image](https://user-images.githubusercontent.com/36908476/96294128-d5ff1d80-1026-11eb-8d24-705a09215d03.png)


-Auto Import
