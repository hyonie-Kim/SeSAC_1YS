🌱 Saturday, November 19th, 2022

# 서버 생성 및 실행

웹 서버를 만들 때는 express라는 외부 모듈을 사용한다. 다음 명령어로 express를 설치한다.
`npm install express`
서버파일에 아래 코드 처럼 입력해서 http모듈과 express모듈을 추출한다.

```javascript
// 모듈을 추출한다.
var http = require("http");
var express = require("express");
```

## http 모듈

Nodejs를 통해 서버를 구축하는 방법은 http와 express 두개

- 웹 서버를 구동하기 위한 node.js 내장웹 모듈
- server 객체, request객체, response 객체를 사용한다.
  - server 객체 : 웹 서버를 생성할 때 사용하는 객체
  * response 객체 : 응답 메시지를 작성할 때 두 번째 매개변수로 전달되는 객체
  - request 객체 : 응답 메시지를 작성할 때 첫 번쨰 매개변수로 전달되는 객체

### http 모듈 서버 만들기

`listen(port, callback)` 서버를 첫번째 매개변수의 포트로 실행한다.

> Response객체 <br/>
> writeHead : 응답 헤더 작성 <br/>
> write : 응답 본문 작성 <br/>
> end : 응답 본문 작성 후 응답 종료

```javascript
const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.write("<h1>Hello!</h1>");
  res.end("<p>End</p>");
});
server.listen(8080, function () {
  console.log("8080번 포트로 실행");
});
```
