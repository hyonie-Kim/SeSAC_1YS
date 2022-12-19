const express = require("express");
const app = express();
const session = require("express-session");
const router = require("./routes");
const port = 8000;


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: '1234', // 임의 문자열로 세션을 암호화함
    resave: false, // ture: 모든 요청마다 session에 변화가 없어도, session을 다시 저장함
    saveUninitialized: true, // 초기화되지 않은 Session을 저장할지 안할지, 
    // cookie:{ //Session id 쿠키에 대한 옵션
    //     httpOnly: true,
    //     maxAge:
    // },
    // secure: //보안서버에서만 작동
}))


app.use( express.json() );
app.use('/',router);




// app.get("/", (req, res)=>{
//     if(req.session.user) res.render("index", {isLogin: true}) 
//     else res.render("index", {isLogin: false})
//         //res.send("Session 수업")
    
// })

// app.get("/setSession", (req,res)=>{
//     // req.session = {}
//     req.session.user = "id";
//     res.send("Session 생성 성공!")
// })

//const user = {id:"a", pw:"1"};

// app.post("/login", (req,res)=>{
//     // req.session = {}
//    if(req.body.id == user.id && req.body.pw == user.pw){ //로그인을 성공했을때 저장!! 
//         req.session.user = req.body.id;
//         res.send("로그인 성공!")
//    }
//    else {
//         res.send("로그인 실패");
//    }
// })

// app.destory("/logout", (req,res)=>{
//    req.session.destory(function(err){
//     if(err) throw err;

//      res.send("로그아웃 성공")
//    })
// })


app.listen(port, ()=>{
    console.log("Server Port:", port)
})