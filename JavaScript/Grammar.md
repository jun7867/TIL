## 문자열 정렬

### 방법1. String.sort()
```js
// 사전순 정렬 (n번째 해당하는 위치를 비교하여 검사)
return strings.sort( (a,b) => {
    if(a[n] >= b[n]) return 1;
    if(a[n] < b[n]) return -1;
}
```
### 방법 2. localeCompare()
기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴
```js
// 사전순 정렬 (n번째 해당하는 위치를 비교하여 검사)
// "a"는 "c"의 앞에 오기 때문에 음수 값을 리턴
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

//알파벳 순으로 "check"는 "against"의 뒤에 오기 때문에 양수 값을 리턴
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a"는 "a"와 같기 때문에 0
'a'.localeCompare('a'); // 0
```

* 관련 문제 
[문자열 내 맘대로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript)

## Array

### Array 중복 제거 => Set 활용
```js
// nums= [3,1,2,3]
const arr = [...new Set(nums)]; // [ 3, 1, 2 ]
```
* 관련 문제 
[폰켓몬](https://programmers.co.kr/learn/courses/30/lessons/1845)
