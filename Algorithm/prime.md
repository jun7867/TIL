# 소수구하기 알고리즘
## 에라토스테네스의 체

에라토스테네스의 체는 소수를 구할때 시간을 엄청나게 단축시켜주는 알고리즘이다.

2부터 시작하면서 처음에는 True로 시작하고 해당하는 배수를 검사에서 배제시킨다.

예를 들어서 2의 배수인 2,4,6,8....은 False로 바꿔서 검사를 하지 않는다.

이런식으로 2,3,5,7 등의 배수를 검사에서 제외하면서 검사할 항목이 급격하게 줄어들게 된다.

example 백준 1929
```
# 1929 소수 구하기
# math
# 에라토스테네스의 체
import sys

input = sys.stdin.readline

N, M = map(int, input().split())

array = [True] * (M + 1)
array[0] = False
array[1] = False

for i in range(2, M + 1):
    if array[i]:
        if i >= N:
            print(i)
    # 배수 다 지우기
    for j in range(i * i, M + 1, i):
        array[j] = False
```
