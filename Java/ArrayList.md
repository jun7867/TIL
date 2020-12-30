# ArrayList 사용법

ArrayList란?
ArrayList는 List 인터페이스를 상속받은 클래스로 크기가 가변적으로 변하는 선형리스트입니다. 

일반적인 배열과 같은 순차리스트이며 인덱스로 내부의 객체를 관리한다는점등이 유사하지만 한번 생성되면 크기가 변하지 않는 배열과는 달리 

ArrayList는 객체들이 추가되어 저장 용량(capacity)을 초과한다면 자동으로 부족한 크기만큼 저장 용량(capacity)이 늘어난다는 특징을 가지고 있습니다.

## 선언
```java
ArrayList<Integer> num = new ArrayList<Integer>();//타입설정 int타입만 사용가능
ArrayList<Integer> num2 = new ArrayList<>();//new에서 타입 파라미터 생략가능
ArrayList<Integer> num3 = new ArrayList<Integer>(10);//초기 용량(capacity)지정
ArrayList<Integer> list2 = new ArrayList<Integer>(Arrays.asList(1,2,3));//생성시 값추가
```

## 값 추가, 삭제
```java
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(3); //값 추가
list.add(null); //null값도 add가능
list.add(1,10); //index 1뒤에 10 삽입

list.remove(1);  //index 1 제거
list.clear();  //모든 값 제거
```


## 크기 구하기
```java
System.out.println(list.size()); 
```

## 출력
get()
```java
ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));

System.out.println(list.get(0));//0번째 index 출력
		
for(Integer i : list) { //for문을 통한 전체출력
    System.out.println(i);
}

Iterator iter = list.iterator(); //Iterator 선언 
while(iter.hasNext()){//다음값이 있는지 체크
    System.out.println(iter.next()); //값 출력
}
```

## contain, indexOf
```java
ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
System.out.println(list.contains(1)); //list에 1이 있는지 검색 : true
System.out.println(list.indexOf(1)); //1이 있는 index반환 없으면 -1
```


