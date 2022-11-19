const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(function(req, res){
    fs.readFile("./실습6. CSS 애벌레만들기.html")
    .then(function(data){
        res.end(data)
    })
});

server.listen(8080, function(){
    console.log('8080번 포트로 실행👾')
})