const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// 라우팅 경로
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/calculator", (req, res) => {
//   console.log(typeof req.query.num1);
//   let result = Number(req.query.num1) + Number(req.query.num2);
//   res.send(`${req.query.num1} + ${req.query.num2} = ${result}`);
// });

app.post("/calculator", (req, res) => {
  //   console.log(req.body);
  let result = Number(req.body.num1) + Number(req.body.num2);
  res.render("result", { result: result });
});
// 404 페이지
app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지입니다.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
