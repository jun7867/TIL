# 투 포인터

### 리스트에 순차적으로 접근해야 할 때 2개의 점의 위치를 기록하면서 처리하는 알고리즘

### 부분 연속 수열의 합

예를 들면, 학생 40명이 순서대로 일렬로 세워져 있는 경우, 1번부터 10번까지 라고 부르듯 시작점과 끝점 2개의 점을 통해 데이터의 범위를 표현할 수 있다.

**'특정한 합을 가지는 부분 연속 수열'** 문제에 적용가능하다.

![image](https://user-images.githubusercontent.com/36908476/97443503-71b95380-196e-11eb-9e87-061444cf00af.png)


```
# 여기서 primeList는 list들
# N는 찾고자 하는 부분합
interval_sum = 0
end = 0
count = 0
start = 0
while True:
    if interval_sum >= N:
        if interval_sum == N:
            count += 1
        interval_sum -= primeList[start]
        start += 1
    elif end == len(primeList):
        break
    else:
        interval_sum += primeList[end]
        end += 1
```

관련 백준 문제 1644 소수의 연속합 https://www.acmicpc.net/problem/1644

=> 시간 복잡도는 O(N) 이다.
