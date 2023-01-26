const express = require("express");
const app = express();
const port = 3000;

// 미들웨어등록
// app.use("/static", express.static("static"));

app.set("view engine", "ejs"); // ejs 템플릿 설정
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// // 미들웨어등록
// app.use("/static", express.static("static"));
// app.use("/views", express.static(__dirname) + "/views");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/getForm", (req, res) => {
  console.log(req.query);
  // res.send("get 요청 성공!");
  // const data = { id: req.query.id, pw: req.query.pw, title: "GET 요청" };
  // res.render("result", { data });
  res.render("result", {
    title: "GET 요청",
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  // const data = { id: req.body.id, pw: req.body.pw, title: "POST 요청" };
  // res.render("result", { data });
  res.render("result", {
    title: "POST 요청",
    userInfo: req.body,
  });
});

app.get("/img", (req, res) => {
  res.render("practice29");
});
app.get("/practice30", (req, res) => {
  // console.log(req.query);
  res.render("practice30");
});

app.get("/practice31", (req, res) => {
  res.render("practice31");
});
app.post("/practice31_form", (req, res) => {
  console.log(req.body);
  res.send("Post form 전송이 완료되었습니다.");
});
app.get("/axios_get", (req, res) => {
  console.log(req.query);
  res.send({
    msg:
      "이름: " +
      req.query.name +
      "\n" +
      "성별: " +
      req.query.gender +
      "\n" +
      "생년월일: " +
      req.query.year +
      req.query.month +
      req.query.date +
      "\n" +
      "관심사: " +
      req.query.interests,
  });
});
app.get("/login", (req, res) => {
  res.render("practice33");
});
app.post("/login", (req, res) => {
  console.log(req.body);
  // const data = { id: "sesac", pw: "1234" };
  if (req.body.id == "sesac" && req.body.pw == "1234") {
    res.send({ msg: "<p>성공</p>" });
  } else {
    res.send({ msg: "실패" });
  }
});

app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지 입니다.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
