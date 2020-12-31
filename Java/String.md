# 문자열 다루기

## StringBuilder로 내림차순
```java
String str="afbafa";
char[] sol = str.toCharArray(); 
Arrays.sort(sol);
// =>return new StringBuilder(new String(sol)).reverse().toString();

```
방법 2) String -> Array -> List -> Array
```java
String answer = ""; 
String[] sArr = s.split(""); 
Arrays.sort(sArr);
List<String> list = Arrays.asList(sArr); 
Collections.reverse(list); 
sArr = list.toArray(new String[list.size()]);

```
