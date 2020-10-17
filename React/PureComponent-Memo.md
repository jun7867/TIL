## PureComponent

[PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)

Class에서 사용됨

어떤 상태 하나를 바꾸면 관련된 것들이 다 rendering 되지만 업데이트가 되지 않고 dom에서 바뀌는게 없기에 업데이트 되지 않아 성능에는 영향이 없다.

=> 하지만, 컴포넌트가 업데이트 됐을때 수행되는 함수(componentDidUpdate)가 따로 있다면 이는 성능에 영향을 미친다.

=> 이를 방지하기 위해 Pure component, Memo를 사용한다. (memo는 Hook에서 사용됨)

=> 변화가 없으면 render 안하기!!


```
// 자동 render를 원치 않는 component를 바꿔준다

import React, {PureComponent} from 'react';

class Input extends PureComponent {
.
.

```

<br>

이전 props,state를 지금과 shallow하게 비교한다. (얇게 비교하는 거는 reference만 비교해서 안에 동일한 object라면 object 안에 데이터가 바껴도 false 라고 한다.) 

그래서 PureComponent를 썻는데 object를 바꾸지 않고 안에있는 State의 데이터만 바꿨다면 원하는대로 update가 되지 않게 된다.

**따라서 update가 필요하면 업데이트를 원하는 곳에서 {...~~} 를 써서 새로운 object에 복사해주고 변경이 필요한 부분만 {...grade, count: grade.count+1} 이런식으로 바꿔주면 된다.**


## PureComponent VS Component

PureComponent는'shouldComponentUpdate'을 구현해서 props과 state의 변경사항이 발생하면 shallow comparisons을 해서 오브젝트 자체가 변경되지 않았다면 render를 안하게 한다.

계속 업데이트가 되는 컴포넌트는 그냥 Component를 사용하면 된다.(비교하는데 시간이 더 쓰임)



