[Intersection Observer API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

# Intersection Observer

원하는 요소가 특정한 영역에 들어왔을 때 알려주는 관찰자 (콜백 함수 호출)

```jsx
const observer = new IntersectionObserver(callback,options)
```

```jsx
// 실제 예시
const callback = (entries , observer) => {
	// entries (화면에 들어온 요소의 정보를 담고 있다. boundingClientRect, intersectionRatio ..)
	entries.forEach(entry => {
            // entry가 들어오는 상황이면
            if(entry.isIntersecting) {
              entry.target.classList.add('active');
            }else{
              entry.target.classList.remove('active');
            }

        });
}
const boxes=document.querySelectorAll('.box');
const observer=new IntersectionObserver(callback);
// 관찰자가 관찰하도록 명령.
boxes.forEach(box => observer.observe(box));
```

## entries

entries 는 화면에 들어온 요소의 정보를 담고 있다. 

boundingClientRect, intersectionRatio 같이 들어온 요소의 rect 정보나 얼마만큼의 비율로 들어왔는지 정보가 들어있고 위의 예시처럼 해당 entry에 classList 를 사용해서 요소를 추가 삭제할 수 있다.

## options

```jsx
const options = {
        root: null, 
        rootMargin : '0px', // viewport에서 +rootMargin값을 포함한 부분까지 확인. (눈에 보이기 전에 확인하고 싶으면 or 컨텐츠를 미리 준비하기 위해)
        threshold: 0.2, // 얼마만큼 보여줘야 callback함수가 처리되는지. (1로 설정하면 화면에 다 들어와야 callback실행됨) 0~1(100%)
      }
```

options는 기본값으로 root : null, rootMargin: '0px', threshold: 0 으로 설정되어 있다.

- root

root: null은 viewport (우리가 화면에서 보는 윈도우 부분) 를 기준으로 한다는 뜻이고 root에 원하는 요소를 넣을 수 있다. 예를들어서 아래 예시는 container 클래스를 기준으로 한다는 뜻이다.

```jsx
root: document.querySelector('.container')
```

- rootMargin

rootMargin : '0px'은 설정한 root 기준에서 추가로 얼마나 더 많이 포함할 것인가이다. 예를들어 100px을 주었다면 기준(viewport)에서 +100px까지 기준에 포함된다.

- threshold

threshold는 얼마만큼 보여줘야 callback 함수가 처리되는지이다.

isIntersecting일때는 설정한 만큼 실행되고 반대로 나갈때는 반대로 1이면 조금이라도 안보이면 callback이 실행. (0.2면 나갈땐 0.8)


## 활용 예시

스크롤을 내리면서 화면에 해당하는 요소가 들어오면 효과주기. (색 변화 or JS callback함수 실행)

