## 1. list에 있는 int들을 붙여서 출력
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

## 5. 리스트안에 리스트 값들을 sort하기
```
array=[[1,3],[5,1],[3,4]]
array.sort(key=lambda x: x[1]) # 2번째 값으로 sort , 1번째 값으로 하려면 x[0]
#[[5,1],[1,3],[3,4]]
```

## 6. 리스트안에 int를 string으로 변환
int로 바꾸는건 반대로
```
temp = list(map(str, numbers))
```

## 7. String 한 문자씩 list에 저장
```
s = list(input().strip())
# asdf => ['a','s','d','f']
```
## 8. dict 솔트하기
```
# 키값으로 sort
dict = sorted(dict.items())

# value값으로 sort
# itemgetter(1)은 1번째 인덱스로 sort 한다는 뜻. 
dict= sorted(dict.items(), key=operator.itemgetter(1))

```
## 9. dict key,value 분리
```
x = {'a': 10, 'b': 20, 'c': 30, 'd': 40}
for key, value in x.items():
  print(key, value)
```

## 10. 중복 제거를 위해 set을 하고 다시 list로 변환
```
word_list=list(set(word))
```

## 11. list 정렬 중복 조건
백준 1181번 문제
```
# index0기준 정렬 + index1 기준으로정렬
words_list.sort(key = lambda word: (word[1], word[0])) 
```
