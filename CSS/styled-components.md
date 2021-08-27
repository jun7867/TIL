### Reference

[styled-components: Basics](https://styled-components.com/docs/basics)

[다양한 방식의 리액트 컴포넌트 스타일링 방식 CSS, Sass, CSS Module, styled-components](https://velog.io/@velopert/react-component-styling#styled-components)

---

### 특징

- 자바스크립트 파일 안에 CSS를 작성하는 형태 (emotion과 대체 가능)
- .css파일을 따로 만들지 않아도 된다.
- props나 자기 자신 특정 가능.

 

### 환경 설정

```tsx
$ yarn add styled-components
```

### 예제 코드

```tsx
import React from 'react';
**import styled, { css } from 'styled-components';**

const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: **${props => props.color || 'blue'};**
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  **/* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */**
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
```

### Tagged Tmplate Literal (` `)

JavaScript 객체나 함수가 전달될 때 원본 값을 그대로 추출 하기 위해서 사용한다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f47e5e40-ceb7-474e-84aa-2ab4d821db60/Untitled.png)

### 스타일링된 엘리먼트 만들기

- 만들고자 하는 태그를 styled 뒤에 붙인다. (div, button, input...)

```tsx
const MyComponent = styled.div`
	font-size: 2rem;
`;

// 문자열로 styled 의 인자로 전달
const MyInput = styled('input')`
  background: gray;
`
// 아예 컴포넌트 형식의 값을 넣어줌
// Link라는 것을 override 할 수 있다. 
const StyledLink = styled(Link)`
  color: blue;
```

### Props 연결

```tsx
import styled, { css } from 'styled-components';
/* 단순 변수의 형태가 아니라 여러줄의 스타일 구문을 조건부로 설정해야 하는 경우엔
css 를 불러와야합니다. 
*/

const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: **${props => props.color** || 'blue'};
`;

/* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;
```

### 반응형 디자인

```tsx
import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768
};

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
**const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;**

  return acc;
}, {});

const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  **${media.desktop`width: 768px;`}
  ${media.tablet`width: 768px;`};**
`;
```
