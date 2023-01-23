🌱 Tuesday, November 22th, 2022

# Express통한 서버 구축

- node환경에서 서버 구축하기
- npm_modules가 만들어지며 express에 관련된 폴더 생성
- package.json의 dependencies에 express 기록
- `npm i express --save` or `npm install express`설치

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
app.use(express.static("public"));
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

### `app.get("*" , (req,res)=>{})` 모든 경로 출력

- 라우팅 규칙을 지정을 할때 모든 라우팅 규칙이 끝난 이후에 작성
- 잘못된 URL 접속 404 페이지를 만들수 있다.

```javascript
app.get("*", (req, res) => {
  res.status(404).send("찾을 수 없는 페이지 입니다.");
});
```

# 미들웨어

- `use()`를 이용해 등록할 수 있다.

## RDB / NoSQL 차이점

- NoSQL의 경우는 비교적 RDB 보다는 사전에 정의된 내용으로 부터 자유롭고
- RDB 사전에 엄격하게 정의된 스키마를 요구하는 경우가 많다.
