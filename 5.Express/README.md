# Express 서버 만들기

- node환경에서 서버 구축하기
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

### `<form>` 으로 데이터 전송 하기 : get방식

- form 안에 name을 통해서 값이 어떠한지 추적을 할수 있다.
- 물음표(?) 뒤에 나오는 파라미터를 express에서는 요청에 있는 쿼리를 통해 접근할수 있다.
- `console.log(req.query)`
- 자바스크립트의 변수명을 `res.send(계산결과 =${result})` 중괄호안에 백틱넣기
- `console.log(typeof req.query.num1)` req.query의 값이 String 타입으로 인식되고 있기 때문에 문자열을 숫자로 바꿔야 한다. `const result = Number(req.query.num1)+Number(req.query.num2)`
- 또한 `res.send()`에서 숫자타입만 전달할 경우 에러가 나기 때문에 문자로 다시 바꿔서 전달해야 한다. `res.send(String(result))`
