## Routing

네트워크상에 있는 traffic 경로를 선택하는 process다.

⇒ HTTP request 어떤 특정한 페이지로 연결할 건지 결정하는 메카니즘

⇒ 사용자가 url을 줬을때 어떤 페이지로 연결할 것인지 결정

www.card/home  , www.card/contact, www.card/login 같은 특정한 페이지가 따로 있어서 연결


</br>
SPA는 하나의 url로 한번 페이지가 로딩되고, 페이지를 바꾸려고 할 때 새로운 페이지가 생기는게 아니라 부분적으로만 바뀜. 

⇒ 각각의 영상마다의 위치를 알 수 없고 뒤로가기 같은 것을 할 수 없음.

⇒ 이를 보완하기 위해 **react router** 사용. (SPA 유지 + url 붙일 수 있음)

[React Router: Declarative Routing for React](https://reactrouter.com/)

### router 설치
```jsx
// React router dom 설치
yarn add react-router-dom
```

### router 
```jsx
// app.js
import { BrowserRouter, Route, Switch } from 'react-router-dom';

<BrowserRouter>
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/profile'>Profile</Link>
		</nav>	
	  <Switch>
       <Route path={['/','/home']}>
         <Home /> 
       </Route>
       <Route path="/profile">
         <Profile />
       </Route>
    </Switch>
</BrowserRouter>
```

-Link to를 사용하게 되면 클릭했을 때 이동하는 버튼이 생긴다.

-locolhost:3000/ 또는 locolhost:3000/home 주소를 입력하면 Home Component로 이동한다.

### exact
```jsx
//exact: bool
exact를 추가하면(true) /home으로 갔다가 /profile 갔을때 이동이 된다. 
exact가 false인 경우에 /home/profile도 yes가고 간주한다. 
따라서 exact가 false이면 profile을 눌러도 계속 home 상태다.(yes이기 때문에)

<Route path={['/','/home']} exact>
         <Home /> 
 </Route>
```


### props.history를 props 안하고도 쓰는 방법 (Hook)

```jsx
const Home = props => {
	const history = useHistory();
return (
	<>
		<h1>Home</h1>
		<button
        onClick={() => {
          history.push("./profile");
        }}
      >
        Go to Profile
      </button>
		</>
	};
};
export default Home;
```

component를 전달 해주는 경우 (인라인을 쓸때 render 될때마다 생성돼서 추천되지 않는 방법)

⇒ useHistory()를 사용해서 props로 component를 전달 안받아도 사용가능하다.

⇒ react router를 이용하면 기존 페이지를 유지하고 변경된 곳만 바뀐다. 

⇒ 성능에 좋다.

 React router를 사용하면 전체적인 페이지는 그대로 있고 변경되는 부분만 업데이트 된다.

기존 HTML link와 차이가 있다. (변경되는 부분만 교체되기 때문에 성능이 좋다)
