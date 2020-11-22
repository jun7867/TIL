# Block , Inline 차이점

# 블록
앞뒤 요소 사이에 새로운 줄(line)을 만든다.

주로 단락, 목록, 네이베이션 메뉴, 꼬리말 등을 표현한다.

1. 크기를 지정할 수 있다

2. margin과 padding 모두 적용 가능

# 인라인
항상 블록 레벨 요소내에 포함되어 있다. 한 단락같은 큰 범위에는 적용될 수 없고 문장, 단어 같은 작은 부분에 적용된다.

새로운 줄(line)을 만들지 않는다. 즉, 단락내에 나타난다.

예를 들어 <a> <em> 등이 있음.
  
1. 크기를 지정할 수 없다

2. 아무 내용도 적지 않으면 화면 상에서 나타나지 않음

3. margin, padding의 위, 아래는 사용 할 수 없다.
  
추가 내용: https://namhandong.tistory.com/95?category=802570

## I. 블록 / 인라인

- 블록 / 인라인 태그

    ### - 블록 태그

    header, footer, h1~h6, main, article, section, aside, nav, address, div, ol, ul, p, hr, pre, blockquote, figure, form....

    ### - 인라인 요소

    a, em, strong, i, u,sub, time, span, br, img, audio, video, iframe....
    
    
## CSS에서 블록 / 인라인 요소 특성 지정
```
display: inline # 인라인 요소처럼 사용
display: block # 블럭 요소처럼 사용
```
