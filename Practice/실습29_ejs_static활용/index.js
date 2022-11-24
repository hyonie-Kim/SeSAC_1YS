const express = require("express");
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    // res.send("<h2>ejs와 static 활용중</h2>")
    res.render("form")
})

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); // 데이터를 json 형태로 파싱(post 요청시 사용)


// 미들웨어등록
app.use('/static', express.static("static"))

app.get('/img',(req, res)=>{
    // res.send("<h2>img 업로드 폴더입니다.</h2>")
    // res.sendFile(__dirname + "views/index.html")
    // res.sendFile(__dirname+"/views/index.html")
    res.render("index", {
        title:"실습29 페이지 입니다."
    })
})


// get 요청

app.get("/form",function(req,res){
    console.log(req.query)
    // Enter 개행문자 사용
    res.send({msg:
             "이름: " + req.query.name +'\n'+
             "성별: " + req.query.gender +'\n'+
             "생년월일: " + req.query.year +'년'+ req.query.month + '월'+ req.query.date + '일' + '\n'+
             "관심사: " + req.query.interest})
})

// post 요청
app.get("/form_post",(req,res)=>{
    res.render("form_post");
})

// get 응답

app.get("/getForm",(req,res)=>{
    console.log(req.query)
    res.send("get요청 성공🧡")
})


// post 응답
app.post("/postForm", (req,res)=>{
    console.log(req.body);
    res.send("post 요청 성공");
})

app.listen(port,()=>{
    console.log("👾실습29 ejs와 static 활용하기", port)
})
