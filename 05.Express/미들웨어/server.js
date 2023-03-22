// 모듈 추출
var http = require("http");
var express = require("express");

const port = 8000;

// 웹서버 생성
var app = express();

app.use(express.urlencoded({ express: true })); // x-www-urlencoded 데이터 해석
app.use(express.json()); // json형태로 파싱 : 딕셔너리 형태와 비슷
app.use(function (request, response, next) {
  console.log("first");
  next();
});
app.use(function (request, response, next) {
  console.log("second");
  next();
});
app.use(function (request, response, next) {
  response.send("<h1>헬로우 미들웨어!</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>안녕하세요</h1>");
});
// 웹서버 실행
app.listen(port, () => {
  console.log(`${port}번 실행중- 미들웨어 next공부중`);
});
