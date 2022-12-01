const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes"); //require 모듈 불러오기
app.use('/', router); //상대 주소로 경로 지정


app.get('*',(req,res)=>{    // 별(*)은 모든 라우터, 모든 라우터를 정의한 후 맨 마지막에 써야한다.
    // res.send("404 Error! 주소가 존재하지 않습니다. ");
    res.render('error');

})

app.listen(port, ()=>{
    console.log("👾server open:",port)
})