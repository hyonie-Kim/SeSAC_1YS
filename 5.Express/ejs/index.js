const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "../../.env" });
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = process.env.PORT;
const MongoURL = process.env.MONGO_URL;
const MongoURL2 = process.env.MONGO_URL2;
var db, post, counter;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  post
    .find()
    .toArray()
    .then((postData) => {
      res.render("index", { postData: postData });
      console.log(req.body.postData);
    })
    .catch((err) => {
      console.log(err);
      res.render("index", { postData: [] });
    });

  //   res.render("index", { text: "효니", flag: true, ArrayData:[1,2,3] });
});
app.get("/upload", (req, res) => {
  res.render("upload");
});
app.post("/post/upload", (req, res) => {
  // MongoDB를 통해서 data를 받는법
  console.log(req.body);
  counter
    .findOne({ name: "counter" })
    .then((counterInfo) => {
      post
        .insertOne({
          _id: counterInfo.postNum,
          title: req.body.title,
          content: req.body.content,
          date: new Date(),
        })
        .then(() => {
          counter
            .findOneAndUpdate(
              { name: "counter" },
              {
                $inc: { postNum: 1 }, // postNum 값증가
              }
            )
            .then(() => {
              res.redirect("/");
            });
        });
    })
    .catch((err) => {
      console.log(err);
      res.send("글 저장에 실패 하였습니다.");
    });
});

app.post("/calculator", (req, res) => {
  console.log(req.body);
  const result = Number(req.body.num1) + Number(req.body.num2);
  res.render("calculator/result", { result: result });
});

app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지 입니다.");
});

MongoClient.connect(MongoURL, (err, database) => {
  if (err) {
    console.log(err);
    return;
  } else {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
      db = database.db("Express"); //Express 데이터베이스에 접근
      post = db.collection("posts"); // post변수에는 db에 있는 posts라는 이름의 collection을 만듦
      counter = db.collection("counter");
    });
  }
});
