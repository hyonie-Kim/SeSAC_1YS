🌱 Saturday, November 19th, 2022

# 프로미스(Promise)

```javascript
new Promise(function (resolve, reject) {
  // resolve : 함수형태. 성공했을 때 실행하는 친구
  // reject : 함수형태. 실패 or 에러를 처리할때 사용되는 친구
});
```

- Callback Hell로 인한 복잡도와 증가와 예외처리의 어려움을 해결하기 위해 만들어진 것
- 비동기 작업에서 성공과 실패를 분리해 메소드를 수행한다.
- resolve(value): 일이 성공적으로 끝난 경우
  - 프로미스를 실행한 곳의 then으로 들어간다.
- reject(error): 일이 성공적이지 않은 경우. 에러 발생 시
  - 프로미스를 실행 한 곳의 catch로 들어간다.

### 프로미스의 상태

```javascript
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        "promise 상태는 fulfilled. then으로 연결된다. 이때의 flag가 true이다."
      );
    } else {
      reject(
        "promise 상태는 rejected. catch로 연결된다. 이때의 flag는 false이다. "
      );
    }
  });
}
```

- Pending: Promise를 수행중인 상태
- Fulfilled: Promise가 resolve된 상태
- Rejected: Promise가 지켜지지 못한 상태. Reject된 상태
- Settled: fulfilled 혹은 rejected로 결론이 난 상태
