## 이진 검색 알고리즘(binary search algorithm)

오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘. 

처음 중간의 값을 임의의 값으로 선택하여, 그 값과 찾고자 하는 값의 크고 작음을 비교하는 방식을 채택하고 있다. 

처음 선택한 중앙값이 만약 찾는 값보다 크면 그 값은 새로운 최댓값이 되며, 작으면 그 값은 새로운 최솟값이 된다. 

검색 원리상 정렬된 리스트에만 사용할 수 있다는 단점이 있지만, 검색이 반복될 때마다 목표값을 찾을 확률은 두 배가 되므로 속도가 빠르다는 장점이 있다.


```
def binarySearch(array, value, low, high):
	if low > high:
		return False
	mid = (low+high) // 2
	if array[mid] > value:
		return binarySearch(array, value, low, mid-1)
	elif array[mid] < value:
		return binarySearch(array, value, mid+1, high)
	else:
		return mid
```

### 백준 
https://www.acmicpc.net/problem/1920
