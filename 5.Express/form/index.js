const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // ejs 템플릿 설정
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

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

app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지 입니다.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
