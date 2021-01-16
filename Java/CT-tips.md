# Java coding test tips

## 1. StringBuilder
string을 더할때 빠르게 더하는 방법
```
StringBuilder sb = new StringBuilder();
sb.append('a');
sb.append('b');
// ab
```

### 1-1. StringBuilder reverse
입력받은 문자열을 거꾸로 한뒤에 숫자로 변환하는 예시. (Integer.parseInt는 String-> Int로 변환)
```
int A = Integer.parseInt(new StringBuilder(st.nextToken()).reverse().toString());
```

### 1-2. StringBuilder 초기화
```
sb.delete(0,sb.length()); // 여기서 sb는 StringBuilder임.
```


## 2. BufferedReader , StringTokenizer 
빨리 입력 받기, StringTokenizer는 한줄에 입력받는 것들을 저장하고 nextToken()으로 하나씩 꺼낼 수 있다.
```
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine(), " ");
int N = Integer.parseInt(st.nextToken()); // 첫번째 
int X = Integer.parseInt(st.nextToken()); // 두번째

st = new StringTokenizer(br.readLine(), " "); // 그 다음줄 입력 받기
```

## 2-1. StringTokenizer 활용
```
StringTokenizer st = new StringTokenizer(br.readLine(), " ");
System.out.println(st.countTokens());
```
StringTokenizer의 countTokens를 활용하면 토큰의 개수를 알 수 있음.


## 3. int -> String
방법 1) valueOf
```
String multi = String.valueOf(1 * 2 * 3);
```
방법 2) Integer.toString
```
String multi = Integer.toString(1 * 2 * 3);
```

## 3-1. String -> int
방법 1) Integer.parseInt
입력받은 것을 int로 변환
```
int testcase = Integer.parseInt(br.readLine());
```
방법 2) Integer.valueOf()
입력받은 것을 int로 변환
```
int testcase = Integer.valueOf(br.readLine());
```

## 4. charAt 문자열에서 index값 꺼내오기 , 숫자로 만들기
```
multi.charAt(0) // 0에 해당하는 값 꺼내올 수 있다.
multi.charAt(j) - '0'을 빼주면 숫자가 됨.
```

## 5. 아스키코드 (char -> int)
```
Scanner in = new Scanner(System.in);
int ch = in.next().charAt(0);
System.out.print(ch);
```

## 5-1 아스키 코드 (int -> char)
```
Scanner in = new Scanner(System.in);
int num = in.nextInt();
char ch = (char) num;
System.out.println(ch);
```


## 6. 문자열 다루기
### 6-1 contains
```
s="abc";
s.contains("a"); // True / False로 문자 포함 여부 파악.
```
### 6-2 replace
```
s="abc";
s = s.replaceAll("a", "*"); // 모든 a를 *으로 변경
```


## 7. array range 자르기
copyOfRange
```
int[] temp = Arrays.copyOfRange(array, start_Idx, end_Idx);
```


## 8. replace
### 8-1. replace
replace는 같은 값이 있으면 다 바꿔준다.

### 8-2. replaceFirst
먼저 나오는 값 하나만 바꿔준다.
