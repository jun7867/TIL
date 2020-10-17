# State 와 Props

## State

컴포넌트 안에서 내가 정의한 컴포넌트 UI를 위한 데이터를 보관하는 오브젝트

이 **state라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리엑트가 자동적으로 render 함수 호출.**

state object를 업데이트 해주기 위해서는 setState를 사용해야 한다.

```
// class에서
state= {
  countL 0,
};

handleIncrement = () => {
  this.setState({count: this.state.count + 1});
```
setState를 통해서 전체 object를 업데이트 해줘야 한다. 따라서 this.state.count +=1 이런식으로 부분적으로 업데이트하면 적용이 안된다.

<br>

## Props

props는 컴포넌트 밖에서(외부)에서 받아오는 데이터로 부모 component로 부터 데이터를 받는다.

컴포넌트의 재사용을 높이기 위해서 사용한다. (외부로 부터 데이터를 입력 받아서 같은 컴포넌트로 데이터에 맞게 UI 보여주기 위해.)

그래서 component 자체에서 state를 변경하는 것이 아니라 상위 컴포넌트로 부터 props를 받아서 처리한다.

title,onClick 같은 것들을 인자로 전달해 주면 이걸 props 오브젝트로 묶어서 컴포넌트로 전달

```
//grades 라는 component

state={
  grades: [
    {id: 1, name:"Nam", count:1},
    {id: 2, name:"Yoon", count:2},
  ],
};

render() {
  return (
    <ul>
      {this.state.grades.map(grade => (
        <Grade key={grade.id} grade={grade} />
       ))}
      );
   }
```
여기서 props는 Grade 라는 component에 grade라는 props를 넘긴건데 그 안에 데이터는 {grade}로 해당 컴포넌트에서 가지고 있는 state 속 grades를 하나씩 보내준다.

그러면 Grade라는 component에서 이 props를 받아서 해당 name, count 값을 사용할 수 있다.

이때, list에서는 key를 같이 넘겨줘야 함으로 key에 관련된 props도 같이 보내면 된다.(단, 배열의 index를 키로 설정하면 배열이 바뀌면 꼬일수도 있으니 이렇게 사용해서는 안된다.)

```
// grade component
.
.
render() {
  const {name,count}=this.props.grade;
  return (
    <span>{name}</span>
    <span>{count}</span>
   )
```
이런식으로 props를 받아서 사용 가능하다.
<br>

### Props로 Call back 함수 전달
props로 똑같이 call back 함수를 전달할 수 있다.
```
// Grades class
handleIncrement = grade => {
  // count 구현
  const grades = [...this.state.grades];
  const index = habits.indexOf(grade);
  grades[index].count++;
  this.setState({grades});
}
render(){
.....
  <Grade key={grade.id} grade={grade} onIncrement={this.handleIncrement}/>
```

그러면 하위 컴포넌트에서 props를 받아서 Click을 하게 되면 
```
// grade class
handleIncrement = () => {
  this.props.onIncrement(this.props.grade);
}

render(){
....
  <button onClick={this.handleIncrement}>.... 
  // onClick에서 arrow function으로 바로 설정해줘도 되지만 render가 될때마다 재생성 됨으로 지금처럼 사용하는게 좋다.

```

-삭제하는 기능을 할거면 filter를 사용해 받아오는 grade의 id랑 같지 않은것을 변수에 저장하고 그거를 state 업그레이드 해주면 된다.

### Tips
-destructuring 문법

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
<br>
