const express = require("express");
const multer = require("multer");
const multiparty = require("multiparty");
const path = require("path");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ express: true })); // x-www-urlencoded 데이터 해석
app.use(express.json()); // json형태로 파싱 : 딕셔너리 형태와 비슷
/*
const upload = multer({
    dest: "uploads/" //파일이 들어갈 경로 설정
})
*/
const upload = multer({
  // 저장할 공간 설정
  storage: multer.diskStorage({
    // 경로다시지정
    destination(req, file, done) {
      done(null, "uploads/");
    },
    // 파일이름 설정
    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname); //originalname: 클라이언트가 원래 지정한 파일명
      // const fields = Date.now() + ext;
      const filename = req.body.name + ext;
      done(null, filename);
    },
  }),
});

app.get("/file", (req, res) => {
  res.render("file");
});

app.post("/fileUpload", (req, res) => {
  console.log(req.body);
  const form = new multiparty.Form({
    uploadDir: "public/image",
  }); // 폼객체를 새로 만들어준다.폼객체를 만들 때, 옵션으로 uploadDir 라는 이름으로 public폴더에 image폴더넣어준다.
  form.parse(req, (err, fields, files) => {
    console.log(fields, files);
  }); //클라이언트로 부터 오는 요청을 넣어주면 세가지를 반환한다.
});

app.post("/upload", upload.none(), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload None");
});

app.post("/upload-single", upload.single("userfile"), (req, res) => {
  //upload.single 로 받음, 여기서 single이라는 함수는 파일 하나만 보낼때 사용
  console.log(req.file);
  console.log(req.body);
  res.send("Upload Complete");
});

app.post("/upload-array", upload.array("userfile"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload Complete");
});

app.post(
  "/upload-fields",
  upload.fields([
    { name: "userfile1" },
    { name: "userfile2" },
    { name: "userfile3" },
  ]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Complete");
  }
);

app.get("/", test, test2, (req, res) => {
  console.log("req.name: ", req.name);
  console.log("Hello");
  res.send("Hello");
});

function test(req, res, next) {
  req.name = "12345";
  console.log(req.query);
  console.log("test 함수입니다.");
  next(); // test 미들웨어 함수가 끝났고, 그다음을 진행해라
}

function test2(req, res, next) {
  console.log("test2 함수입니다.");
  next(); // test 미들웨어 함수가 끝났고, 그다음을 진행해라
}

app.listen(port, () => {
  console.log("👾Server Port", port);
});
