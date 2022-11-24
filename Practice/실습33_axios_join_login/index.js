const express = require('express');
const app = express();
const port = 8001;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function(req,res){
    res.render("index");
});

app.get("/login", function(req, res){
    console.log(req.query);
    if(req.query.id === "hyonie" && req.query.pw === "love123123"){
        res.send({msg: "<p style='color:blue'>get 로그인 성공!</p>"})
    } else {
        res.send({msg:"<p style='color:red'>get 로그인 실패 (아이디 또는 비밀번호가 틀렸습니다.)</p>"})
    } 
    
})

app.post("/login", function(req, res){
    console.log(req.body);

    if(req.body.id == "hyonie" && req.body.pw == "love123123"){
        res.send({msg: "<p style='color:blue'>get 로그인 성공!</p>"})
    } else {
        res.send({msg:"<p style='color:red'>get 로그인 실패 (아이디 또는 비밀번호가 틀렸습니다.)</p>"})
    }
    
})

app.listen(port, ()=>{
    console.log("실습33.server Port",port)
})