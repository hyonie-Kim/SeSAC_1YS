const express = require("express");
const app = express();
const port = 8002;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes"); 
app.use('/', router); //미들웨어 등록 - 서버로 가기전

app.get('*', (req, res)=>{
    res.send('error')
})


app.listen(port, ()=>{
    console.log("👾server open:",port)
})