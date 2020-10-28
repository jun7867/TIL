# 구간 합 (접두사 합)
### O(N+M)

L과 R 구간 사이의 데이터들의 합

=> Prefix Sum 접두사 합

구간의 누적 합 P을 따로 구한다음에 원하는 구간을 구할때는 P[R]-P[L-1] 된다.

```
n=5
data = [10,20,30,40,50]

sum=0
prefix_sum=[0]
for i in data:
    sum+=i
    prefix_sum.append(sum)

# 구간 합 계산
left=3
right=4
print(prefix_sum[right]-prefix_sum[left-1])
```
