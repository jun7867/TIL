# Java coding test tips

## 1. StringBuilder
string을 더할때 빠르게 더하는 방법
```
StringBuilder sb = new StringBuilder();
sb.append('a');
sb.append('b');
// ab
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

## 3. String -> int
방법 1) valueOf
```
String multi = String.valueOf(1 * 2 * 3);
```
방법 2) Integer.toString
```
String multi = Integer.toString(1 * 2 * 3);
```
방법 3) Integer.parseInt
입력받은 것을 int로 변환
```
int testcase = Integer.parseInt(br.readLine());
```

## 4. charAt 문자열에서 index값 꺼내오기 , 숫자로 만들기
```
multi.charAt(0) // 0에 해당하는 값 꺼내올 수 있다.
multi.charAt(j) - '0'을 빼주면 숫자가 됨.
```



