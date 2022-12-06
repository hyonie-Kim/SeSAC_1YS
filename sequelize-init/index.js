const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes"); // 1. routes > index.js 파일을 자동으로 불러온다.
app.use('/visitor', router);
// localhost:8000/visitor~~~~

const userRouter = require("./routes/user") // 2. 때문에 routes > user.js 파일을 불러오게 새로 정의한다.
app.use('/user', userRouter);


app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});