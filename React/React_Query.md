회사에서 새로운 프로젝트 진행을 하게 되었는데 기존 프로젝트에서 사용하던 Store에 대해 고민하였고 Store에서 API를 호출하는 과정에 Store를 이렇게 사용하는게 맞나 하는 의문점이 생겼습니다. 그 후 React Query에 대해서 알게 되었고 학습하고자 '우아한테크세미나 React Query' youtube와 배민 기술 블로그를 보고 정리하게 되었습니다.

Reference에 해당 유튜브 링크를 공유해 드립니다. 

---
# 상태 관리

### FE에서 상태관리란?

UI/UX의 중요성과 함께 프로덕트 규모가 커지면서 FE가 **관리해야 하는 상태가 많아졌다**. 개발자 입장에서 관리해야하는 데이터들을 효율적으로 관리하는 방법으로 사용된다. 

모던 웹 프론트 환경에서는 여러가지 상태들이 존재하고 이들을 체계적으로 관리하기 위해 상태관리 라이브러리 (redux, mobX, Recoil) 들이 존재한다. (Props Drilling 이슈 해결)

### 상태관리에 대한 고민

Store는 전역 상태가 저장되고 관리되는 공간인데 반해 실제로는 상태 관리보단 API 통신을 위한 코드로 많이 사용되고 있다.

<aside>
💡 Q. 상태 관리 영역에서 API 통신, Fetching, Error 처리, 비슷한 구조의 APi 통신이 반복되고 있는데 이렇게 사용하는게 맞나!?

</aside>

일반적으로 서버에서 받아야하는 상태들의 특성은 다음과 같다.

1. Client에서 제어하거나 소유되지 않은 원격의 공간에서 관리되고 유지됨
2. Fetching이나 Updating에 비동기 API가 필요함
3. 다른 사람들과 공유되는 것으로 사용자가 모르는 사이에 변경될 수 있음
4. 잠재적으로 ‘out of date’가 될 가능성을 지님

ex) 음식 주문을 한 후 서버에서 관리되고 사용자 모르게 바뀌는 데이터값들이 있다.
 
⇒ 사실상 FE에서는 이 값들이 저장된 state들은 일종의 캐시가 된다.

### [Client State] vs [Server State]

![](https://images.velog.io/images/jun7867/post/b254f6a6-a905-4ffd-86dc-32a31d0a239a/image.png)

기존 상태관리 라이브러리는(Redux, MobX) Server State를 관리하기 적합하지 않다...

⇒ React Query

---

# React Query란?

Fetch, cache and update data in your React and React Native applications all without touching any "global state".

- ****Declarative & Automatic****
- ****Simple & Familiar****
- ****Powerful & Configurable****

⇒ **fetching, caching, synchronizing and updating server state in React**

추가로 TS, GraphQL, SSR, Next.js, devtools 등 다양한 것들을 지원한다.

[React Query](https://react-query.tanstack.com/)

```jsx
// example
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
 const queryClient = new QueryClient()
 
 export default function App() {
   return (
     <**QueryClientProvider** client={queryClient}>
       <Example />
     <**QueryClientProvider**>
   )
 }

 function Example() {
   const { **isLoading, error, data** } = **useQuery**('repoData', () =>
     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       res.json()
     )
   )
 
   if (**isLoading**) return 'Loading...'
 
   if (**error**) return 'An error has occurred: ' + error.message
 
   return (
     <div>
       <h1>{**data**.name}</h1>
       <p>{**data**.description}</p>
       <strong>👀 {**data**.subscribers_count}</strong>{' '}
       <strong>✨ {**data**.stargazers_count}</strong>{' '}
       <strong>🍴 {**data**.forks_count}</strong>
     </div>
   )
 }
```

**QueryClientProvider를 기본적으로 사용해야 된다.**

---

## React Query 3가지 core 컨셉

### 1. Queries  : 데이터 Fetching용

![](https://images.velog.io/images/jun7867/post/3c3bed48-c072-45eb-b6cd-d8fffec3fc34/image.png)

- Query Key

Key, Value 맵핑 구조이며, String 형태와 Array 형태가 있다. Query Key에 따라서 query caching을 관리한다. 

```jsx
// string
// A list of todos
 useQuery('todos', ...) // queryKey === ['todos']
 
 // Something else, whatever!
 useQuery('somethingSpecial', ...) // queryKey === ['somethingSpecial']

//Array
// An individual todo
 useQuery(['todo', 5], ...)
 // queryKey === ['todo', 5]
 
 // An individual todo in a "preview" format
 useQuery(['todo', 5, { preview: true }], ...)
 // queryKey === ['todo', 5, { preview: true }]
 
 // A list of todos that are "done"
 useQuery(['todos', { type: 'done' }], ...)
 // queryKey === ['todos', { type: 'done' }]

```

- Query Function

Promise를 반환하는 함수이며 데이터를 resolve하거나 error를 thow할 때 사용된다. 

```jsx
function Todos({ status, page }) {
   const result = useQuery(['todos', { status, page }], fetchTodoList)
 }
 
 // Access the key, status and page variables in your query function!
 function fetchTodoList({ queryKey }) {
   const [_key, { status, page }] = queryKey
   return new Promise()
 }
```

- useQuery의 반환값

 data, error, isFetching, status, isLoading, isSuccess, refetch, remove...

(다양하고 유용한 인터페이스를 제공해준다.)

- useQuery Option

onSuccess, onError, onSettled, enabled(자동 실행 여부), retry(동작 실패시 retry 여부), select (data 가공), keepPreviousData(새롭게 fetching 시 이전 데이터 유지 여부), refetchInterval (주기적으로 refetch 여부) .. 등 다양한 Option 설정이 가능하다.

<aside>
💡 Queries 파일 분리를 추천
⇒ domain별로 관리

</aside>

![](https://images.velog.io/images/jun7867/post/919665e6-e1a9-4087-a136-1b8dca1080c0/image.png)

### 2. Mutations : 데이터 updating시 사용

CRUD에서 CUD ⇒ 데이터 생성/수정/삭제용으로 사용

```jsx
function App() {
   const mutation = useMutation(newTodo => {
     return axios.post('/todos', newTodo)
   })
 
   return (
     <div>
       {mutation.isLoading ? (
         'Adding todo...'
       ) : (
         <>
           {mutation.isError ? (
             <div>An error occurred: {mutation.error.message}</div>
           ) : null}
 
           {mutation.isSuccess ? <div>Todo added!</div> : null}
 
           <button
             onClick={() => {
               mutation.mutate({ id: new Date(), title: 'Do Laundry' })
             }}
           >
             Create Todo
           </button>
         </>
       )}
     </div>
   )
 }
```

일반적으로 useQuery와 비슷하나 onMutate Option은 **Optimistic update(API가 성공할 것이라고 보고 UI를 미리 업데이트, 실패 시 롤백)**를 적용할 때 유용하게 사용된다. 

### 3. Query Invalidation

Waiting for queries to become stale before they are fetched again doesn't always work, especially when you know for a fact that a query's data is out of date because of something the user has done. For that purpose, the `QueryClient` has an `invalidateQueries` method that lets you intelligently mark queries as stale and potentially refetch them too!

관리하는 query를 invalidate하는 방법

```jsx
// Invalidate every query in the cache
 queryClient.invalidateQueries()
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries('todos')

// 해당 key를 가진 query는 stale(오래된 데이터) 취급되고, 현재 rendering 되고 있는 query들은 백그라운드에서 refetch 된다.
```

---

## Caching

⇒ 기존 컨셉은 RFC (5861) 새로운 데이터가 보여지기 전까지 지난 데이터를 보여준다.

**Options...**

- cacheTime: 메모리에 얼마만큼 있을건지 (해당시간 이후 GC에 의해 처리, default 5분)
- staleTime: 얼마의 시간이 흐른 후에 데이터를 stale 취급할 것인지 (default 0)
- refetchOnMount/ refetchOnWindowFocus / refetchOnReconnect : true이면 Mount/ window focus / reconnect 시점에 data가 stale이라고 판단되면 refetcgh한다. (default true)

**Query 상태 흐름**

- 화면에 있다가 사라지는 query 상태 흐름

![](https://images.velog.io/images/jun7867/post/ff5fbbb7-77db-40e4-981a-52cbcbabfb81/image.png)

- 화면에 있다가 없다가 복잡한 query 상태 흐름

![](https://images.velog.io/images/jun7867/post/9e237d67-4b31-4f40-b7bf-a89048271b3f/image.png)

*주의점
-staleTime은 default가 0이며, 만약에 stale하지 않은 fresh한 데이터면 값들이 retch가 일어나지 않는다.

-default 상태에서는 queries는 항상 stale 취급이며 refetch가 발생한다. inactive query들은 5분 후에 GC에 의해 처리되며 query 실패 시 3번까지 retry한다.

---

### QueryClient 내부 구조

내부적으로 Context를 사용하기 때문에 Provider가 필요하다.

![](https://images.velog.io/images/jun7867/post/93cb9653-b925-411e-bf0b-0f01c6797b20/image.png)

---

## 결론

### 배민 React Query 사용 그 이후!

- Store는 Client State들만 남아서 목적에 맞고 심플하게 관리되고 있다.
- Server State들은 React Query와 함께 간단하고 파워풀하게 관리되고 있다.
- Component는 조금 길어졌지만 Container 컴포넌트 같아졌다...

### 장점

- 서버 상태 관리가 용이하고 직관적인 API 호출 코드를 보여준다.
- API 처리에 대한 각종 인터페이스 및 옵션 제공
- Client Store가 Store 답게 사용된다.
- devtool 제공으로 디버깅이 편하다
- Cache 관리가 좋다.

### 고민점

- Component가 커진다.. (분리와 설계에 대한 고민이 필요)
- 좀 더 난이도가 높아진 프로젝트 설계 (Component 유착 최소화 및 사용처 파악)
- React Query 장점을 더 잘 활용할 방법 고민..(API 통신 그 이상)

### 어떤 상황에서 React Query를 사용하면 좋을까!? (WHY!!!)

- 수많은 전역상태가 API 통신과 엮여있어 비대해진 Store에 대해 고민될 경우
- API 통신 관련 코드를 간단하게 구현하고 싶은 경우
- FE에서 데이터 Caching 전략에 대해 고민하는 경우

---
# Reference

[https://www.youtube.com/watch?v=MArE6Hy371c](https://www.youtube.com/watch?v=MArE6Hy371c)

[https://techblog.woowahan.com/6339/](https://techblog.woowahan.com/6339/)

---
