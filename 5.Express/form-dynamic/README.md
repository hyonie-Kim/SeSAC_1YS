# 동적 form 전송

- `<input type="submit">` 또는 `<button type="submit">`을 이용해 전송
- 전송 시 페이지 이동

## 비동기 HTTP 통신

폼의 데이터를 서버와 **dynamic**하게 송수신 하는 것. 즉 웹문서가 정적으로 멈춰 있는 것이 아니라 일부 내용이 실시간으로 변경되는 것

- 동기 방식 : 한 번에 하나만 처리 → 페이지를 아예 이동해 서버가 데이터 처리
- 비동기 방식 : 서버에 데이터를 보내고 응답을 기다리는 동안 다른 처리 가능

### Ajax

- 자바스크립트를 이용해 클라이언트와 서버 간에 데이터를 주고 받는 비동기 HTTP통신
- 장점
  - JQuery를 통해 쉽게 구현 가능
  * Error, Success, Complete의 상태를 통해 실행 흐름을 조절할 수 있다.
- 단점
  - JQuery를 사용해야만!! 간편하고 호환성이 보장 (xml 사용은 복잡)
  * Promise 기반이 아님

```javascript
$.ajax({
  url: "/ajax",
  type: "POST",
  data: data,
  success: function (data) {
    console.log(data);
  },
});
```

### Axios `npm install axios`

- Node.js와 브라우저를 위한 Promise API를 활용
- 비동기 HTTP 통신이 가능, return이 Promise 객체로 온다.
- 장점
  - Timeout 기능이 존재
  * Promise 기반으로 만들어짐
  - 브라우저 호환성이 뛰어남
- 단점
  - 서버 NPM 모듈 설치 or 클라이언트 CDN 호출을 해야 사용이 가능

```javascript
axios({
  method: "post", // 통신하고자 하는 방식 get(default값), post, patch, delete
  url: "/user", // 통신하고자 하는 주소
  data: {
    // JSON형태의 보내고자 하는 데이터, Request의 body로 데이터를 보낸다.
    userName: "새싹",
    userId: "sesac",
  },
}).then((response) => console.log(response));
```

**Params URL 파라미터 `params:{?뒤에 오는 쿼리 값들}`**

- GET방식으로 보낼때 ? 뒤에 객체를 보내는것
- {key:value, key:value}로 작성
- Request의 query가 받는다.

### Fetch

- ES6부터 들어온 JavaScript 내장 라이브러리
- Promise 기반
