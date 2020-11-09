# 대부분의 문제는 Oracle을 기준합니다.

## 0. SELECT
SELECT는 조회하는 구문이다.

## 1. WHERE
WHERE은 조건문으로 뒤에 조건을 주면 원하는 값을 고를 수 있다.

WHERE에 NOT이나 = 앞에 !을 붙여주면 반대 조건을 찾을 수 있다.
```
SELECT animal_id, name
FROM animal_ins
WHERE INTAKE_CONDITION != 'Aged'
Order BY animal_id
```
## 2. Order by 
order by [column] 을 하면 컬럼명을 기준으로 오름차순 정렬한다는 뜻.

orber by 1은 첫번째 컬럼을 기준으로 오름차순 정렬한다는 뜻이다. 

내림차순으로 하고 싶으면 Order by 1 desc 하면 된다.
```
SELECT * FROM _TABLE order by 1
```
만약 여러가지 조건을 결합해서 정렬하고 싶다면 여러개를 적으면 된다. (적을때는 원하는 순서대로 적어야함)
```
-프로그래머스 여러 기준으로 정렬-
SELECT animal_id, name, datetime
from animal_ins
order by name, datetime desc;
```
=> name을 먼저 정렬하고 그 뒤에 time으로 정렬

## 3. Limit (MYSQL)
mysql에서 사용된다. (Oracle은 서브쿼리에 rownum을 사용해야 해서 복잡하다.

```
SELECT NAME FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1
```
