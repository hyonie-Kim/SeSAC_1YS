const express = require("express");
const app = express();
const port = 8004;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes"); //라우터를 미들웨어로 걸기기
app.use('/login', router); // localhost:8003/visitor

app.get('*', (req, res)=>{
    res.send('error')
})


app.listen(port, ()=>{
    console.log("👾server open:",port)
})