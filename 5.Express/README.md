# Express 서버 만들기

- `npm i express --save` 설치

### 공식 문서 확인

- Express를 통해서 서버를 구축하는 방법은 Hello world 예제 참고
- https://expressjs.com/ko/starter/hello-world.html

### `app.get` 라우팅 규칙

```javascript
app.get("/test", (요청, 응답) => {
  응답.send("test!");
});
```

### `res.sendFile()`HTML 파일 전송

- sendFile은 해당 파일의 경로를 적어야 한다.
- `__dirname`(디렉토리 네임)으로 경로를 불러와주고 해당경로에서 `/public/index.html` 에서 파일이 전송된 것을 확인 할수 있다.

```javascript
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
```

### `aap.listen` 을 통해서 서버를 실행

```javascript
app.listen(port, () => {
  console.log(`${port}포트 실행`);
});
```

### `app.use(express.static("public"))` static 파일 관리

- 라우팅 규칙을 설정하기 이전에 정의해야한다.
- 이미지경로를 찾아서 이미지 태그 출력
