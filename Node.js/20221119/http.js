/*
req => 클라이언트요청
res => 서버의 응답
*/

const http = require('http');
const fs = require('fs').promises;
/*
// 연습1
const server = http.createServer(function(req,res){
    // 클라이언트가 접속했을때 실행되는함수
    // 작성중.. 계속..
    res.write("<h1>Hello, hyonie!!</h1>");
    // 응답 끝내기
    res.end("<hr>")
});
*/

/*
// 연습2 다른 파일에서 열기
const server = http.createServer(function(req,res){
    fs.readFile('./test.html')
    .then(function(data){
        res.end(data.toString())
    })
});
*/

/*
server.on() //이벤트 등록
server.listen() // 서버를 실행하고 클라이언트를 기다린다.
*/


server.listen(8080, function(){
    console.log('8080번 포트로 실행👾')
})