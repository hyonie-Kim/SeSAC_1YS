const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
});

app.get("/calculator", (req, res) => {
  console.log(req.query);
  const result = Number(req.query.num1) + Number(req.query.num2);
  res.send("계산 결과는 ?" + result);
});

app.get("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지 입니다.");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
