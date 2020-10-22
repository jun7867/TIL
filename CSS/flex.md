# flex 
CSS의 꽃은 flex라고 생각한다. 엄청 유용!! 꼭 알아두기!!

container, item 둘다 적용 가능

## 중심축, 수직축

-가로로 정렬할거면 가로가 중심축, 세로가 수직축

-세로로 정렬할거면 반대로

```jsx
display: flex;
flex-direction: row; //왼쪽부터 순서대로
flex-direction: row-reverse; //오른쪽부터 순서대로
flex-direction: column; // 위에서 아래로
```

### flex-wrap

```jsx
flex-wrap:nowrap; // (기본값)
flex-wrap: wrap; // 한줄에서 넘어가면 다음줄로 넘어감

```

### flex-flow

```jsx
flex-flow: row wrap; // direction이랑 wrap 같이 쓰는거
```

### justify-content  (container 배치)

```jsx
justify-content: flex-start; // 순서대로 (left->right, top-> bottom)
justify-content: flex-end; // 순서는 유지하지만 오른쪽으로 배치(or bottom)
justify-content: center; // center (가운데로 정렬) -- 엄청 자주씀
justify-content: space-around; // 공간 조금씩 주기
justify-content: space-even; // 공간이 똑같이 남게 주기
justify-content: space-between; // 양끝에 배치하고 중간에 공간 똑같이
```

### align-items (item 중심축 배치) , align-content(item 수직축 배치)

```jsx
align-items: center; // 중심축에서 센터 정렬 -- 엄청 자주씀. !!!!!!
align-items: baseline; // 텍스트를 균등하게 보여주도록 배치

align-content: center; // 중심축에서 센터 정렬
align-content: baseline; // 텍스트를 균등하게 보여주도록 배치
```

### items
```
flow-grow //(컨테이너가 커지면 크기가 늘어남)
flow-shrink // (컨테이가 작아지면 점점 작아짐)
flex-basis // (아이템 자리차지) 60% (60%차지)
align-self // (아이템 따로 하나만 특별하게 배치) center ⇒ 지정한 것만 센터로
```
