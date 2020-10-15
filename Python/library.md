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
