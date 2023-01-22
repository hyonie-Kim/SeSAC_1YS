# 문자열 메소드

### `문자열.slice(start, end)`

slice는 문자를 추출할 떄 사용 된다.

```javascript
var yes = "Today is the day.";
console.log(yes.slice(0, 5)); // output: Today
```

위 처럼 end가 5면, 0부터 4까지 자른다. 보여지고 싶은 곳에 +1을 하고 작성해야 한다.

‼ 여기서 주의 할점은 첫번쨰 인자로 넘어온 시작 인덱스가 가리키는 값은 포함하지만 두번쨰 인자로 넘어온 종료 인덱스가 가리키는 값은 포함하지 않는다.

두번째 인자를 넘기지 않으면, 시작 인덱스가 가리키는 값부터 배열의 마지막 값까지 모두 복사해 준다.

### `문자열.replace(current,new)`

replace는 문자를 대체한다.

```javascript
var yes = "Today is the day.";
console.log(yes.replace("Today", "Tomorrow")); // output:Tomorrow is the day.
```
