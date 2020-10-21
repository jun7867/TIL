# React Hook
https://reactjs.org/docs/hooks-intro.html

기존에 함수형에서 state와 lifecycle을 잘 이용하기 위해 만들어짐. (this , 바인딩, 코드 중복을 줄여줌)

state를 선언할때 [stateName,setStateName] = useState(초기값) 으로 이루어짐

## useCallback

Hook은 Function이기 때문에 class에서는 render부분만 호출되는 반면 hook에서는 전체가 계속 호출된다. 

따라서, handleIncrement 같은 사용할떄만 바껴야 하는 것들은 useCallback 을 이용해서 값이 바뀌는거를 방지해준다.
```
const handleIncrement = useCallback( () => { setCount(count +1); });
```
하지만, useCallback을 많이 만들면 메모리상에 무리가 가기 때문에 조심해서 사용해야 한다.

자식 컴포넌트에 props를 전달해서 re-render가 일어나는 경우에 사용한다.

## useRef
Ref를 사용할 때 createRef를 사용하면 전체가 계속 호출되어 계속 만들어지기 때문에 useRef를 사용한다.

## useEffect
componentDidMount, componentDidupdate를 결합.

마운트, 업데이트가 됐을때마다 호출된다.

```
useEffect( () => {
  console.log(`mounted & updated: ${count}`);
 }, [count]);
```
count가 변경될떄만 변경한다는 뜻.

[count]대신에 [] 빈 것을 넣어주면 처음에만 호출된다. 아무것도 없이 사용하면 호출될때마다 실행된다.
