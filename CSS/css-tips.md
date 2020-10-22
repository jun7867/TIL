# CSS Tips

## 0. Tips
- inline은 한줄에 여러개 가능하다.(span: span은 내용이 없으면 화면에서 보이지 않는다.)

- block은 한줄에 하나만! (div)

ex) CSS에서 display: block, inline-block, inline 등으로 변경 가능하다. 

## 1. list style 지우기

왼쪽에 동글뱅이가 자동으로 생겨서 list style을 제거해주면 사라진다.
```
list-style:none
```

## 2. button outline,border 없애고 cursur 효과주기
```
button {
  outline: none;
  border: 0;
  cursor: pointer;
}
```

## 3. 배경색 투명
```
background-color: transparent;
```

## 4. box-sizing
padding,border가 width와 height에 포함이 되도록 하는 것.
```
box-sizing: border-box;
```

## 5. box-shadow CSS
https://www.cssmatic.com/box-shadow 사이트에 들어가서 쉽게 만들 수 있다.


## 6. 자동 줄바꿈 
```
white-space: pre-wrap;
```

## 7. Background 설정
https://developer.mozilla.org/en-US/docs/Web/CSS/background
https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
### background-image: url("~")
-이렇게만 사용하면 이미지가 반복되고 한쪽 끝만 보이는 경우가 있다. 옵션을 줘야함
```
.box {
        background: center/cover no-repeat
          url('https://media.swncdn.com/cms/BST/67912-gettyimages-817147678-kieferpix.1200w.tn.webp');
      }
```


## Position
https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block

### static (기본값)
-top, bottom, left, right 값을 지정해줘도 영향을 받지 않는다.

-HTML에서 표기된 순서대로, 들어있는 순서대로 맞게 포지션이 결정.

### relative
-원래있던 공간을 유지하면서 위치를 이동한다.(box면 box안에서)

-기존의 자리에서 top,bottom,left,right 값에 따라 영향을 받는다.

### absolute
-원래있던 자리에서 빠져 나오고 (박스 안에서 위치를 이동하지 않고) static으로 설정된 parent에서는 body로부터 절대 위치로 이동한다.

-부모의 사이즈에 따라 사이즈가 변경된다.(width,height에 %를 썼을 경우)

### stiky
-있던 자리를 유지하면서 (부모 요소 안에서) 안보이게 되면 그 위치 그대로 스크롤을 따라 이동한다. (top left 값을 지정해 줘야함)

### fixed
-원래 있던 자리(view point)를 나와서 부모와 상관없이 포지션된다. (스크롤을 따라 이동한다.)
