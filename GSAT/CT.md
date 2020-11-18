# SSAFY CT 대비 문제 풀이

## 문제1) 팰린드롬

팰린드롬(palindrome)이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 단어를 말한다. 'aba'나 'a'와 같은 단어는 팰린드롬이며, 'abaccbcb'나 'anavolimilana'와 같은 단어는 팰린드롬이 아니다.

단어가 주어졌을 때 문장 내에서 가장 긴 팰린드롬의 길이를 찾아라.

예시 : abac에서 가장 긴 팰린드롬은 aba이다. 따라서 답은 3이 된다.

1) lowol

2) abcdedcab

3) anavolimilana

4) zpdlekxnekdededalbi

5) bvnosdmncwolamcnlqancmnwocnmcnw

### 풀이
간단한 풀이는 팰린드룸이 반복되려면 양 옆이 동일해야 시작된다. 양 옆이 동일한게 하나도 없으면 팰린더룸이 없는거라 1이 정답 (그 자체)

예를 들어, acedecf는 d인 순간에 양옆이 e이기 때문에 d를 기준으로 팰린더룸을 검사해 주면 된다. 여기서는 cedec 이기에 5가 정답이다.

같은 방식으로 풀면 1~5번을 쉽게 구할 수 있다. 



(답: 5 5 5 5 1)


## 문제2) 낚시

n명의 사람이 일렬로 서서 낚시를 하고 있는데 낚시줄이 서로 엉켜버렸다. 엉킨 낚싯줄 몇개를 잘라서 멀쩡한 낚시줄만 남기려고 한다.

사람의 번호를 왼쪽부터 1~n 이라고 하고, 찌(낚시줄의 끝부분)도 왼쪽부터 1~n번 째에 있다고 하자.

1번 사람부터 n번 사람가지의 찌가 몇 번째에 있는지 주어질 때, 최소 몇개의 줄을 잘라야 하는지 구하여라.

예시)

3 1 2

1번 사람의 낚시줄은 세번째, 2번사람의 낚싯줄은 첫번째, 3번 사람의 낚싯줄은 두번째 위치로 간 상황이다.

이 경우, 1번 사람의 낚싯줄을 끊으면 2,3번 사람의 낚싯줄끼리는 엉키지 않으므로 하나만 자르면 된다.

문제

1) 4 1 5 2 3

2) 5 4 3 2 1

3) 1 7 2 6 5 3 4

4) 10 8 9 3 7 1 2 5 4 6

5) 3 9 12 8 7 2 6 1 4 5 10 11

### 풀이
이 문제는 LIS(최장 증가수열)로 풀 수 있다.

낚시줄에서 자기보다 작은수는 오른쪽으로 가면 안되고 자기보다 큰 수는 자기보다 왼쪽으로 가면 안된다.

즉, 제일 길게 증가하는 수열을 찾으면 가장 이상적인 낚시 줄을 찾을 수 있고 전체 낚시줄 개수에서 LIS 개수를 빼주면 잘라야 하는 줄 개수가 나온다.

예를들어 1 7 2 6 5 3 4 가 있으면 최장 LIS는 (1 2 3 4) 로 4이므로 7-4 = 3이 정답이다. 

(답: 2 4 3 6 7 )

## 문제3) 비트변환

' 0,1 ' 로 이루어진 N개의 숫자로 만든 수열이 주어진다.

두가지 중 하나의 행동을 할 수 있다.

1.두 숫자의 위치를 바꾼다.

2.하나의 숫자를 0 또는 1 로 바꾼다.

우리가 가진 수열과 원하는 수열이 주어질 때, 원하는 수열을 만들기 위해 쵯소 몇번의 행동을 해야 하는지 구하여라.

예)

01100, 01010

정답 1회

3번째와 4번째 숫자를 2번 작업을 통해 각각 뒤집으면 2번의 작업으로 목표상태를 만들 수 있다. 하지만 1번 작업을 통해 3번째와 4번째 숫자를 골라 서로의 위치를 바꾸어주면 1번 안에 목표 상태에 도달할 수 있다.

문제

1번) 01110,11110

2번)01010,10101

3번)1111000,0000111

4번)10111001101,10111101000

5번) 1111010101010101010,

0100101011011010101

### 풀이
같은 위치에 같은 번호인거는 넘기고 0 1과 1 0 을 최대한 많이 위치를 바꿔주면서 한번에 교환해준다.

답(1 3 4 2 8)

## 문제 4) 편집거리 
두 문자열 A,B 가 주어진다. 문자열 A 에 할 수 있는 연산은 다음 두 가지가 있다.

1. 문자 하나를 지운다.
2. 문자 하나를 추가한다.

A를 B와 같아지게 하려면 위 연산을 최소 몇 번 해야하는지 구하여라.

예시) back , bag

우선 back에서 c를 지우면 bak가 되고, 다시 k를 지우면 ba가 된다.

여기서 뒤에 g를 붙이면 bag와 같아지고, 이보다 적은 연산으로 back를 bag로 만들 수 없으므로 3이 정답이다.

연산 순서를 바꿔서 back를 bagck로 바꾸고 c와 k를 지워도 된다.

문제

1번) melon , watermelon

2번) apple , application

3번) isiteasy , itiseasy

4번) algorithmjobs , aldentespaghetti

5번) editdistanceproblem , dijkstraalgorithm

### 풀이
가장 길게 공통된 부분 부분들을 찾아서 그 이전 값을을 소거시켜주고 채워주면 된다.

LCS(최대공통부분수열) 

답 (5 8 4 21 22)


## 문제 5) 이상한 음식점

이 곳은 맛집이 아니라서 어떤 음식은 너무 짜고 어떤 음식은 너무 싱겁다.

짠음식과 싱거운 음식을 번갈아가며 먹으면 맛이 없기 때문에 우리는 코스 음식 중 몇 개만 골라서 싱거운 음식으로 시작해서 점점 짜게 먹다가 어느 순간부터 점점 싱겁게 먹으려고 한다.

각 음식의 염도가 순서대로 주어질 때, 위와 같이 먹으면 최대 몇 개를 먹을 수 있는지 구하여라.

단, 음식이 씩기 전에 먹어야 하므로 음식의 순서를 임의로 바꿔서 먹을 수 없으며, 증가하는 부분이나 감소하는 부분이 없어도 된다.

1 9 8 3 6 3 9 5 1 4 2

음식의 염도가 위와 같다면 증가하다가 감소하게 먹으려면 정답- **1 9 8 6 5 4 2** 로 먹는 것이 최선이다.

만약 음식이 아래와 같이 주어진다면,

1 2 3 4

감소하는 부분 없이 1 2 3 4 를 모두 먹을 수 있다.

문제

1번) 98 2 37 5 12

2번)23 32 12 98 3 2 1 9 6 2 12 32 12 3 2 8 45 2 3 21

3번)

32 12 98 3 86 42 23 12 2 1 9 6 2 12 32 12 3 2 8 45 2 3 21 37 92 53 68 49 13 87

### 풀이

왼쪽에서 최장 증가, 오른쪽에서 최장증가해서 가장 많은 횟수가 되는 지점까지 찾고 두 개의 합 -1 이 총 먹을 수 있는 음식점 개수이다.


## 문제 6) 삼 거듭제곱 계산기
숫자 n을 3의 거듭제곱 숫자들을 중복 없이 더햇서 만들 수 있는지 구하여라.

(1도 3^0으로 3의 거듭제곱으로 본다.)

예시)

109는 3^0 + 3^3 + 3^4 로 나타낼 수 있다.

7은 3^0 + 3^1 + 3^1 으로 나타낼 수는 있지만 3^1을 두 번 사용했으므로 이 식은 활용할 수 없다.

7은 무슨 수를 써도 중복 없이 3의 거듭제곱을 더해서 만들 수 없다.

문제

1번) 36

2번) 120

3번) 278

4번) 19424

5번) 10492831

### 풀이
3 거듭제곱이면 3진수로 만든 다음에 나머지가 0 또는 1 이여야만 한다. 2 이상일 경우에는 3^n이 2번 이상 나온 다는 뜻이므로 안된다.

답(O O X X X)

## 문제 7) 카드 뒤집기
N개의 카드가 앞면은 1 뒷면은 0 으로 주어진다.

1번의 '찬스' 를 사용하여 i번째, i-1번째, i+1번째 카드를 동시에 뒤집는다.(1번의 찬스로 인접한 카드까지 뒤집는다.)

카드의 앞,뒷 면 정보가 0과 1 로 주어질 때 모두 뒷면으로 만드는 최소 찬스 개수를 구하여라.

예시)

0 0 1 1 1 0 0 1 1 0 1 1 0 0 0 0 0 0 0 0

예시답) 3 회

예시풀이)

1회>

0 0 0 0 0 0 0 1 1 0 1 1 0 0 0 0 0 0 0 0

2회>

0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0

3회>

0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0

문제

1번) 0 1 1 1 1 0

2번) 0 0 0 0 1 1 1 1 0

3번) 0 0 1 1 0 1 1 0 1 1 1 0 1

4번) 1 0 1 1 1 0 0 0 1 0 1 1 0 1 1 1 1 0

5번) 0 1 1 0 1 1 0 1 1 0 0 1 1 0 0 1 1 1 0 1 1 0 0 1 0

### 풀이
백준 2138번 처럼 그리디 문제이다.

처음에는 두번째 칸부터 뒤짚으면서 확인해보고 이게 불가능 하면 첫번째 칸부터 다시 뒤짚어서 확인해본다.

보통 맨 앞이 1로 시작할 경우 index 2번째부터 뒤짚으면서 확인하고 만약에 가능하지 않다면 다시 첫번째부터 검사해보기.

보통 맨 앞이 0으로 시작할 경우 index 0번째부터 뒤짚으면서 확인.

답 (6 8 8 14 14)
