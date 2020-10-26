## 1. list에 있는 int들 붙여서 출력
```
test=[1,3,4,4]
print(*test, sep="")
# 출력 예 : 1344
print(*test)
# 출력 예: 1 3 4 4
```

## 2. list에 있는 string 붙여서 출력

```
test=['a','b','q']
print("".join(test))
#출력 예: abq
```

## 3. list deepCopy하기!
import deepcopy를 해도 되지만 list[:]를 하면 deep copy를 할 수 있다.
```
a=[1,2]
b=a[:]
```
## 4. 한줄에 여러개 입력받아 list에 저장하기
```
testList = list(map(int, input().split()))
print(testList)
# 입력: 1 2 3 , 출력: [1,2,3]
```
