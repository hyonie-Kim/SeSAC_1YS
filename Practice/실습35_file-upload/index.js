const express = require("express");
const multer = require("multer"); //express에 multer 모듈 적용(for 파일업로드)

const app = express();
const path = require("path"); //path 모듈로 경로 다루기 - 파일/ 폴더/ 디렉터리 등의 경로를 편리하게 설정할 수 있는 기능을 제공
const port = 8001;

app.set("view engine", "ejs");
app.use("/uploads",express.static("uploads"))
app.use(express.urlencoded({express: true}));
app.use(express.json());

// 파일을 저장할 디렉토리 설정 (현재 위치에 uploads라는 폴더가 생성되고 하위에 파일이 생성됨)
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/'); // 파일업로드 경로
        },
        filename(req, file, done){
            console.log("filename:", req.body);
            const ext = path.extname(file.originalname);
            const filename = req.body.id + ext;
            done(null, filename); // 파일 이름 설정
        }
    })
})

app.get("/register", (req, res)=>{
    res.render("register");
    console.log(req.path)
})

app.get("/register2", (req,res)=>{
    res.render("register2");
})

app.post("/register", upload.single("userfile"),(req, res)=>{
    res.render("register-result", {
        path: req.file.path
    });
});

app.post("/register2", upload.single("userfile"), (req,res)=>{
    res.send({path: req.file.path});
})


app.listen(port, ()=>{

    console.log("🌱Server Port:",port)
})