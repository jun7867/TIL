## # 1. forEach

```jsx
fruits.forEach((fruit,index) => console.log(fruit,index));
```

## # 2. push , pop (뒤에서 부터 추가, 제거)

```jsx
fruits.push('딸기');
fruits.pop();
```

## # 3. unshift , shift (앞에서부터 추가, 제거)

⇒ 하지만 느려서 잘 사용 안함 (앞 데이터를 수정하면 뒤에 있는 기존 데이터가 변경되기 때문에)

```jsx
fruits.unshift("딸기");
fruits.shift();
```

## # 4. splice (index 위치 제거)

start부터 몇개까지 제거. 아무것도 지정하지 않으면 지정한 인덱스부터 끝까지 다 제거한다.

```jsx
fruits.splice(1) // 1부터 끝까지 제거
fruits.splice(1,1) // 1만 제거
fruits.splice(1,1,'사과') // index 1 지우고 index 1 위치에 사과 추가

```

## # 5. concat (배열 합치기)

```jsx
const fruit=['사과'];
const fruit2=['배'];
const newFruit=fruit.concat(fruit2);
```

## # 5. Searching (find index) , includes (여부 확인)

```jsx
fruits.indexOf('사과'); // 1 ~~ or -1 값 리턴, 없으면 -1
fruits.includes('사과'); // true or false
fruits.lastIndexOf('사과'); // 제일 마지막 사과의 인덱스 리턴
```

## # 6.  join (배열 스트링 합치기)

```jsx
const fruits=['apple','banana']
const result=fruits.join(,); // apple, banana

```

## # 7.  split (스트링을 배열로 만들기)

```jsx
const fruits='apple,banana'
const result=fruits.split(','2); // 2개를 합칩 [apple,banana] 
```

## # 8.  sort reverse

```jsx
const fruits=['apple','banana']
const result=array.reverse(); // result뿐 아니라 array도 순서가 바뀜
```

## # 9.  slice (배열 자르기)

```jsx
const fruits=['apple','banana']
const result=array.slice(0,1); //0 제거
//split은 기존 array도 같이 잘리게 된다.
```

## # 10.  slice (배열 자르기)

```jsx
const fruits=['apple','banana']
const result=array.slice(1,2); // 1번째 인자값을 받아올 수 있음
//split은 기존 array도 같이 잘리게 된다.
```
![image](https://user-images.githubusercontent.com/36908476/100522823-1b4e6780-31ef-11eb-8c16-bf68dc2b0efb.png)

## # 11.  find (객체에서 조건에 맞는 값 찾기)

```jsx
const result=students.find( (student) => student.score ===90 );
```

## # 12.  filter (객체에서 조건에 맞는 값 찾아서 배열 만들기)

```jsx
const result=students.filter( (student) => student.enrolled); //enrolled이 true인 배열 만들기
```

## # 13.  map (배열에 들어있는 각 요소를 변환)

```jsx
const result=students.map( (student) => student.score); //score만 들어있는 배열로 변환
```

## # 14.  some, every (배열에 요소중에서 return true가 있는지 확인)

```jsx
const result=students.some( (student) => student.score < 50); // 한명이라도 50 밑이면 true
const result=students.every( (student) => student.score >= 50); // 모든 학생이 다 50 위여야 true
```

## # 15.   reduce (prev,curr)

지금 current 값이 그 다음번에는 prev로 전달된다. (연결되어짐)

```jsx
const result=students.reduce( (prev,curr) => prev + curr.score,0); // 0부터 시작해서 (0,A) (A,B) .... (D,E) 
// 학생의 score 합이 순차적으로 누적합이 더해짐.

const result=students.reduceRight( (prev,curr) => {
		return prev + curr.score;
},0); // (E,D) (D,C) (C,B)....
// 학생의 score 합이 순차적으로 누적합이 더해짐.
```

---

묶어서 사용 가능

```jsx
const result = students
	.map( (student) => student.score)
	.filter( (score) => score >=50)
	.join();									
```

```jsx
const result = students
	.map( (student) => student.score)
	.sort( (a,b) => a - b) // 정방향 . 역방향은 b - a
	.join();									
```
