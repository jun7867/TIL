# Python library

## 1. itertools
백준 14889번을 풀다가 순열,조합을 사용할때 itertools을 사용하면 편하다는 것을 알았다.

### combinations 조합
```
from itertools import combinations
members = combinations(list, 2)
```
list를 2개씩 조합한 것들을 members에 저장하면 {0,1} , {2,3} 와 같은 조합들이 나옴

### permutations 순열
```
from itertools import permutations
members = permutations(Nlist, N)

for member in members:
  memberList=list(member)
```
permutations은 순열로 Nlist가 4이고 N이 4이면 {0,1,2,3} , {0,2,3,1} ... 와 같은 순열들이 members에 저장됨.
list로 사용하려면 members를 하나씩 꺼내주면서 list로 만들어주면 된다.



## 2. sys

### sys.stdin.readline()

input()을 빠르게 받기 위해서 사용한다.
```
import sys

a=sys.stdin.readline()
```
readline() 뒤에 rstrip()을 붙이면 right 오른쪽 공백을 제거한다는 뜻이다.
strip()은 양쪽 공백을 제거한다는 뜻.


### maxsize
```
import sys
anw=sys.maxsize
```
anw에 maxsize를 저장한다는 뜻. 보통 백준 문제를 풀때 초기값을 설정해줘서 min을 찾아야 하는 문제의 경우 anw=1000000 이런식으로 하는것보다 코드가 훨씬 깔끔하게 사용할 수 있다.

## 3. bisect
bisect는 이진탐색을 해주는 모듈이다. bisect_left, bisect_right, insort, insort_left 이렇게 4개

속도가 이진 탐색이기에 빠르다.

bisect_left(arr,x,lo=0,hi=len(arr)) 은 정렬된 리스트 arr에서 x값이 들어갈 위치 인덱스. (Lo~hi까지이며 경계값은 왼쪽까지 포함이다. 오른쪽 <=까지 포함하려면 right 사용)

```
arr=[100,200,300]
print(bisect.bisect_left(arr,150))
print(bisect.bisect_left(arr,200))
# 결과 
#1
#1
```




