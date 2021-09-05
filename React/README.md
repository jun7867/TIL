
### 20201.08.31 (화)

- .env에 경우 .env.local, .env.development 등이 있으니 참고하길..! 
변수를 사용하려면 REACT_APP , 현재 상태를 구분하려면 NODE_ENV 를 사용.

[Adding Custom Environment Variables | Create React App](https://create-react-app.dev/docs/adding-custom-environment-variables/)

[create-react-app에서 env/환경변수 사용하기](https://flamingotiger.github.io/frontend/react/create-react-app-environment/)

- [Typescript]interface type을 중복해서 사용해야 될 경우 export하면 된다.
(자주 사용되는 것들은 interface관리 폴더에 넣자 

- JSX에서 배열에서 특정 인덱스 뽑아낼때 break할 수 없기에 다른 방법을 쓰는것 보다, slice를 사용한다.

[Array.prototype.slice() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

- useEffect에서 렌더링할때 빈 정도떄문에 생기는 undefined문제는 if문으로 해결한다.
- 빈 props를 넘길떄 생기는 문제는 &&로 해결한다.
