// 코드순서 작성 유의하기
// 1. express모듈 불러오기
const express = require("express")

// 2. 객체 만들기 : 위에 express를 가져다가 객체만들기
const app = express();

// 3. 포트열기 1023이하의 숫자는 안됨. 보통 8080, 8000, 3000포트 사용
const port = 8080;

// localhost:8080 (라우터주소, 함수) 함수에는 무조건 2개의 매개변수필요

// 뷰 엔진으로 ejs템플릿을 사용 명시
app.set('view engine', 'ejs');

// 클라이언트에서 서버로 데이터 보낼때 2줄은 필수!
app.use(express.urlencoded({express: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); // json형태로 파싱 : 딕셔너리 형태와 비슷

// 클라이언트가 폴더를 접근할수 있도록 경로 설정 - 미들웨어 등록
// (가상경로, express.static("폴더이름"))
// static 이라는 실제 존재하는 폴더에 public(=static) 이라는 가상 경로로 접근할 수 있도록 함
// src="/public(=static)/img/apeach.png"
app.use("/static", express.static("static"));


app.get('/', (req, res)=>{
    // send 메서드는 브라우저에 보여줌
    // res 서버가 클라이언트에 보내는 메세지
    // req 클라이언트가 서버에게 보내는 요청
    res.send("<h2>hello express!<h2>")
})

// test 라우터를 만듦 : localhost:8080/test
app.get('/test', (req, res)=>{
    // res.send("<h2>hello test</h2>");

    // 무조건 절대경로로 입력
    res.sendFile(__dirname + "/views/index.html")
})

// ejs 라우터 만들기 : localhost:8080/ejs
app.get('/ejs', (req, res)=>{
    res.render("index", {
        title: "index 페이지 입니다.",
        data: ["a", "b", "c"]
    });
})

app.get("/form",(req, res)=>{
    res.render("form");
})

// get메서드 사용 - 정보가 헤더에 담겨옴
app.get("/getForm",(req, res)=>{
    // 클라이언트가 서버에 보내는 정보
    console.log(req.query);
    res.send("get 요청 성공!💛")
});

// post메서드 사용 - 정보가 바디에 담겨옴
app.post("/postForm",(req, res)=>{
    // 클라이언트가 서버에 보내는 정보
    console.log(req.body);
    // res.send("post 요청 성공!💚")
    res.render("result", {data: req.body})
})

// app서버 열기 (포트번호, 함수) - ! 서버를 여는 코드는 마지막줄에 작성
app.listen(port, ()=>{
    console.log("👾 server open: ", port)
})
