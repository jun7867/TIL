
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

### 2021.09.01(수)

- useEffect 디펜던시시 쓸데없는 업데이틀를 막으려면 useCallback 사용
- async로 사용되는것은 await로 처리 (promise처럼 x)
- 같은 배열 타입을 가지고 있으면 ...를 할 필요없이 그냥 대입하면 된다...

```tsx
video.videosPopular = videos; // 둘다 IVideo[]
```

### 2021.09.02(목)

- styled Component에서 props를 사용할때는 속성 지정 이렇게 해주면 됨.

[Styled-component #3 with typescript](https://velog.io/@hwang-eunji/styled-component-typescript)

### 1) 단일 props 사용시

- styled-components를 작성할 때 여러개 `props`를 사용하여 컴포넌트를 정의한다면 인터페이스를 사용하여 분리하여 사용할 수 있다.
- 컴포넌트에 타입지정할때는 `styled.div<인터페이스명>` 와 같이 사용한다.

```
// styled-components에 1개 props 타입지정
// const Container = styled.div< {프롭스명 : 타입지정} >`
const Container = styled.div< { age : number } >`
  color: ${(props) => (props.age > 20 ? 'red' : 'gray')};
`;
```

- IAppProps, IModalProps 처럼 구분해서 사용하기.
- inject를 할때는 이름을 똑같이 해야된다. 주의!!
