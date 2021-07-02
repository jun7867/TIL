# MYSQL(MariaDB) 기준. 


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

* NULL이 아닌값
```
WHERE [column] IS NOT NULL
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
FROM animal_ins
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
==> LIMIT 1은 젤 위에 1개만 뽑는다는 뜻

## 4. max min 뽑아내기
```
SELECT max(datetime)
FROM animal_ins;
```
datetime에서 max값을 뽑아낸다는 뜻이다. min도 똑같은 방식.

## 5. 총 count 뽑아내기
```
SELECT COUNT(animal_id) FROM animal_ins
```

## 6. 중복 제거하기 Distinct
```
SELECT count(distinct name)
FROM animal_ins
```
name들 중에서 중복이 없는 count값.

## 7. Group by , Having
유형별로 갯수를 가져오고 싶을때 그룹화 해서 count할 수 있는 방법.

특정 컬럼 그룹화 GROUP BY

특정 컬럼 그룹화에 조건 걸기 HAVING

그룹화 하기전 조건 걸기 WHERE
```
SELECT name, COUNT(name) 
FROM animal_ins 
Where name is not NULL 
Group by name 
Having count(name) >1 
order by name;
```
(MYSQL)
```
-입양 시각 구하기
SELECT HOUR(datetime) AS HOUR, COUNT(HOUR(datetime)) AS COUNT
FROM animal_outs
GROUP BY HOUR(datetime)
HAVING HOUR >= 9 AND HOUR <= 19
ORDER BY HOUR
```
참고
https://extbrain.tistory.com/56

## 8. 변수 사용
```
SET @hour := -1;

SELECT (@hour := @hour + 1) as HOUR,
(SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) as COUNT
FROM ANIMAL_OUTS
WHERE @hour < 23;
```

## 9. Null 처리하기 (IFNULL)
IFULL을 사용해 null일 경우 어떻게 처리할 것인지 설정해 줄 수 있다.
```
--프로그래머스 NULL 처리하기--
SELECT animal_type, IFNULL(name,"No name"), sex_upon_intake 
FROM animal_ins 
Order by animal_id
```

## 10. Join
두 테이블의 데이터를 일정한 조건에 의해 연결하여 마치 하나의 테이블처럼 만드는 것

INNER_JOIN , LEFT OUTER JOIN을 많이 사용한다.

-LEFT OUTER JOIN은 왼쪽 테이블과 오른쪽 테이블에서 공통된것을 합치는데 왼쪽은 모든 테이블을 가져온다. (조건에 맞는 데이터가 없을 시 NULL)

LEFT OUTER JOIN ~ ON ~
```
--프로그래머스 없어진 기록 찾기 --
SELECT OUTS.ANIMAL_ID, OUTS.NAME
FROM ANIMAL_OUTS OUTS
LEFT OUTER JOIN ANIMAL_INS INS
ON OUTS.ANIMAL_ID = INS.ANIMAL_ID
WHERE INS.ANIMAL_ID is NULL
ORDER BY OUTS.ANIMAL_ID
```

## 11. LIKE (원하는 문자 찾기)
LIKE '%문자%' 는 '문자'가 들어가 있는 것을 찾는 다는 것이다.

반대는 not LIKE가 있다.

'%el'은 el로 끝나는 문자, 'el%'은 el로 시작하는 문자다.
```
--프로그래머스 보호소에서 중성화한 동물--
SELECT b.animal_id , b.animal_type, b.name 
FROM animal_outs b
left join animal_ins a
on a.animal_id = b.animal_id
WHERE a.sex_upon_intake LIKE '%Intact%' and b.sex_upon_outcome not LIKE '%Intact%'
```

## 12. IN 포함 여부 찾기 (문자 포함)
```
SELECT animal_id, name, sex_upon_intake
FROM animal_ins
WHERE name in ('Lucy','Ella','Pickle','Rogan','Sabrina','Mitty')
ORDER BY animal_id
```

## 13. Case 사용
if문, Else문 처럼 사용 가능하다. (then, else)
```
-- 중성화 여부 파악하기
SELECT ANIMAL_ID, NAME, 
CASE WHEN SEX_UPON_INTAKE LIKE "%NE%" OR SEX_UPON_INTAKE 
LIKE "SP%" THEN 'O' ELSE 'X' END AS "중성화" 
FROM ANIMAL_INS
```

## 14. DATE FORMAT
DATE_FORMAT(datetime,'%Y-%m-%d')
```
SELECT animal_id, name, DATE_FORMAT(datetime,'%Y-%m-%d') FROM animal_ins 
ORDER BY animal_id
```
