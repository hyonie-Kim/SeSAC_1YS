const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const moment = require("moment");
moment.locale("ko");
dotenv.config({ path: "../../.env" });

const app = express();
const port = process.env.PORT;
const MongoURL = process.env.MONGO_URL;

const { Post } = require("./Model/post");
const { Counter } = require("./Model/counter");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.locals.moment = moment;
  next();
});
// 라우팅 경로
app.use("/post", require("./router/post"));

app.get("/", (req, res) => {
  Post.find()
    .exec()
    .then((postData) => {
      res.render("index", { postData: postData });
    })
    .catch((err) => {
      console.log(err);
      res.render("index", { postData: [] });
    });
});

app.get("/upload", (req, res) => {
  res.render("upload");
});

// 404 페이지
app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지입니다.");
});

mongoose
  .connect(MongoURL)
  .then(() => {
    console.log("Connecting MongoDB...");
    app.listen(port, () => {
      console.log(`${port}번 서버 연결✨`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
