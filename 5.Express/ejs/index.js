const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
  //   res.render("index", { text: "효니", flag: true, ArrayData:[1,2,3] });
});

app.post("/calculator", (req, res) => {
  console.log(req.body);
  const result = Number(req.body.num1) + Number(req.body.num2);
  res.render("result", { result: result });
});

app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지 입니다.");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});