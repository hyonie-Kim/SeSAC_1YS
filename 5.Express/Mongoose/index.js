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

app.post("/post/upload", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
  };
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counterInfo) => {
      temp.postNum = counterInfo.postNum;
      const NewPost = new Post(temp);
      NewPost.save().then(() => {
        Counter.findOneAndUpdate(
          { name: "counter" },
          {
            $inc: { postNum: 1 },
          }
        )
          .exec()
          .then(() => {
            res.redirect("/");
          });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("게시글 저장 실패");
    });
});

app.get("/post/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("detail", { postInfo: docInfo });
    });
});

// 수정
app.get("/post/edit/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("edit", { postInfo: docInfo });
    });
});

// 수정기능
app.post("/post/edit", (req, res) => {
  Post.findOneAndUpdate(
    { postNum: req.body.postNum },
    {
      $set: { title: req.body.title, content: req.body.content },
    }
  )
    .exec()
    .then(() => {
      res.redirect(`/post/${req.body.postNum}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});
// 삭제기능
app.delete("/post/delete", (req, res) => {
  Post.deleteOne({ postNum: req.body.postNum })
    .exec()
    .then(() => {
      res.status(200).send("삭제 성공");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("삭제 실패");
    });
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
