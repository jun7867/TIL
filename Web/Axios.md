# Axios



fetch 대용으로 자주 쓰는 라이브러리이다.

axois는 다양한 브라우저에서 호환이 되어 **예전 브라우저에서도 호환**이 된다. (fetch는 안됨)



## Axios 사용
```
yarn add axios
```

```
import axios from 'axios'
class Test {
  constructor(key){
    this.test=axios.create({
      baseURL:'https://www.~~',
      params: {key: key},
    }
  }
  
  async mostFuction() {
    const response = await this.test.get('object', {
      params: {
        part: 'testpart',
        chart: 'testchart',
      }
    });
    return response.data.items;
  }
}
```
axois는 json으로 변환하지 않아도 된다. (라이브러리에서 json으로 자동 변환해줌)

axios는 baseURL을 만들어 주고 공통적으로 쓰이는 param을 만들어 준다.

param들을 따로 확인할 수 있기에 **가독성이 좋다. **

=> dependancy를 깔끔하게 하려면(어디서 key를 받는지도 모르게 하고 싶으면) httpClient를 index.js에 만들어 두고 그것만 할당받아 사용한다.
