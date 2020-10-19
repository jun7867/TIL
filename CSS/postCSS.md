# postCSS

중복되는 코드를 방지하고자 생긴 CSS 전처리기이다.

SASS, LESS는 제공하는 문법에 맞게 작성하면 브라우저가 이해할 수 있는 순수 CSS로 변환된다.

하지만 PostCSS는 플러그인이 다양하고 create-react-app에서 자동 지원해주기에 react에서 많이 사용된다.

frefix와 같은 -webkit을 자동으로 처리해 주기에 브라우저 호환성 문제를 신경 쓸 필요가 없다.

## PostCSS 모듈화
PostCSS는 자동적으로 모듈화를 해주기에 BEM으로 이름을 나눠주지 않아도 자동으로 모듈화 해준다.

ex) react 예시
```
import styles from './button.module.css'
.
.
<button className={styles.button}>
```

```
//button.module.css
.button {
  width: 0.5em
}
```

## 유용한 사이트들
[PostCSS 공식 홈페이지](https://postcss.org/)

[PostCSS Plugins](https://www.postcss.parts/)

[PostCSS Github 설명 페이지](https://github.com/postcss/postcss/blob/master/docs/plugins.md)
