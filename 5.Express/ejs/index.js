const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "../../.env" });

const app = express();
const port = process.env.PORT;
const MongoURL = process.env.MONGO_URL;

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
  res.render("calculator/result", { result: result });
});

app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지 입니다.");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
