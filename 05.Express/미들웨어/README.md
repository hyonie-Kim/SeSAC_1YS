# 미들웨어

- 요청이 들어옴에 따라 응답까지의 중간 과정을 함수로 분리한 것
- 서버와 클라이언트를 이어주는 중간작업
- use()를 이용해 등록할수 있음

app.use() 메서드에 입력하는 콜백함수는 request이벤트 리스너이다.
사용자가 서버에 접속하면 자동으로 실행된다. request이벤트 리스너는 다음 형태이다.

```javascript
app.use(function (request, response, next) {});
```

app.use()메서드는 여러번 사용할 수 있는데, 이때 매개변수 next는 다음 콜백 함수를 의미한다.
server.js 파일에서 각각의 콜백함수를 통과하며 console.log메서드를 실행한다. 이렇게 사용자의 요청을 처리하면서 지나가는 app.use()메서드의 콜백함수를 미들웨어 라고 부른다.

## 미들웨어 - static

```javascript
app.use(express.static("public"));
app.use("/static", express.static("public"));
```

static 미들웨어는 `express.static()` 메서드를 `app.use()`메서드의 매개변수로 넣으면된다.
`express.static()` 메서드의 매개변수에는 제공할 파일이 들어 있는 폴더 이름을 입력한다.

- 이미지, css 파일 및 javascript 파일과 같은 정적 파일 제공
- Express에 있는 static 메소드를 이용해 미들웨어로 로드
