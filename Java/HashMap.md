# HashMap
HashMap은 파이썬의 dictionary와 같이 key와 value를 저장해서 사용할 수 있다.

## 특징
- null key와 null value를 모두 허용합니다.

- 내부적으로 데이터에 접근할 때 동기화를 보장하지 않습니다.

- 데이터의 순서를 보장하지 않습니다.

- 중복된 key값을 허용하진 않지만, 중복된 값은 갖을 수 있습니다.

## APIs
put()

putAll()

get()

remove()

clear()

isEmpty()

keySet()

values()

containsKey()

containsValue()

replace()

## put()
put()은 인자로 key와 value를 받습니다. 전달된 인자는 HashMap에 key-value 관계로 저장이 됩니다.
```
Map<String, Integer> fruits = new HashMap<>();
fruits.put("apple", 1);
```

## get()
get()은 인자로 전달된 key에 해당하는 value를 리턴해 줍니다. key가 존재하지 않으면 null을 리턴합니다.
```
fruits.get(apple) // 1
```

## keySet(), values()
keySet()은 HashMap에 저장된 key들을 Set 객체로 리턴해줍니다.

values()는 HashMap에 저장된 value들을 Collection 객체로 리턴해줍니다.
```
Map<String, Integer> fruits = new HashMap<>();
fruits.put("apple", 1);
fruits.put("banana", 2);
fruits.put("kiwi", 3);
System.out.println("keySet(): " + fruits.keySet());
System.out.println("values(): " + fruits.values());

Set<String> keys = fruits.keySet();
for (String key : keys) {
    System.out.println("key: " + key);
}

Collection<Integer> values = fruits.values();
for (Integer value : values) {
    System.out.println("value: " + value);
}

// keySet(): [banana, apple, kiwi]
// values(): [2, 1, 3]
// key: banana
// key: apple
// key: kiwi
// value: 2
// value: 1
// value: 3
```

## containsKey(), containsValue()
containsKey()는 HashMap에 인자로 전달된 key가 존재하면 true를 리턴하고 그렇지 않으면 false를 리턴합니다.

containsValue()는 HashMap에 인자로 전달된 key가 존재하면 true를 리턴하고 그렇지 않으면 false를 리턴합니다.

```
Map<String, Integer> fruits = new HashMap<>();
fruits.put("apple", 1);
fruits.put("banana", 2);
fruits.put("kiwi", 3);

System.out.println("containsKey(apple): " + fruits.containsKey("apple"));
System.out.println("containsKey(undefined): " + fruits.containsKey("undefined"));
System.out.println("containsValue(1): " + fruits.containsValue(1));
System.out.println("containsValue(0): " + fruits.containsValue(0));

// containsKey(apple): true
// containsKey(undefined): false
// containsValue(1): true
// containsValue(0): false
```

## replace()
replace()는 인자로 전달된 key의 value를 인자로 전달된 value로 교체해 줍니다. 교체되어 삭제되는 value는 리턴됩니다. 존재하지 않는 key가 인자로 전달되면 null이 리턴됩니다.
