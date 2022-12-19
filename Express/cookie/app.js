const express = require("express");
const app = express();
const port = 8000;
const router = require("./routes")
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser());

app.use('/', router);
// app.get("/", (req, res)=>{
//     // if(req.cookies.CookieKeyTest) res.render("ejs",{popup: "none"});
//     // else{}
//     res.render("index")
// })

const option = {
    httpOnly: true, // 클라이언트가 document.cookie로 접근할수 없게함, false는 접근 가능
    maxAge: 30000,// 만들어진 순간부터 초만큼 뒤에 만료됨 (ms 단위) ex)3000 -> 3초뒤에 만료, 30000 -> 30초
    //expires: "2022-12-09T09:00:00", // GMT 시간 2022-12-09T09:00:00 
    //path: "/visitor", // lacalhost:8000 쿠기가 없음. localhost:8000/visitor/~~~~~ 해당경로에만 쿠키가 있음. default "/"
    //secure: false, // true라고 할 경우, https 보안서버에만 적용됨
    //signed: true // 쿠키의 암호화  default false
}

// app.get("/", (req,res)=>{
//     if(req.cookies.popup == "1") res.render("index", {pop:"none"});
//     else res.render("index", {pop:"block"})
    
// })
// app.post("/setpopup", ()=>{
//     res.cookies("popup", "1", option);
//     res.send(true)

// })

// app.get("/set", (req, res)=>{
//     res.cookie("CookieKeyTest", "1value", option);
//     res.send("쿠키 생성 성공🍪");
// })

// app.get("/get", (req, res)=>{ // 쿠키 가져오기
//     console.log(req.cookies);
//     console.log(req.cookies.CookieKeyTest);
//     res.send(req.cookies);
// })


app.listen(port, ()=>{
    console.log("Server Port:", port)
})