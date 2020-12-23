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
