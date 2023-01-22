const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const moment = require("moment");
moment.locale("ko");
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
app.use(function (req, res, next) {
  res.locals.moment = moment;
  next();
});

app.get("/", (req, res) => {
  post
    .find()
    .toArray()
    .then((postData) => {
      res.render("index", { postData: postData });
      console.log("postData:", req.body.postData);
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

app.get("/post/:postNum", (req, res) => {
  console.log(req.params.postNum);
  post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
    //doc.date = moment(doc.date).format("YYYY MMMM Do, HH:mm");
    res.render("detail", { postInfo: doc });
    console.log("doc:", doc);
  });
});
app.get("/post/edit/:postNum", (req, res) => {
  post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
    res.render("edit", { postInfo: doc });
    console.log("edit_doc:", doc);
  });
});

app.post("/post/edit", (req, res) => {
  post
    .findOneAndUpdate(
      { _id: parseInt(req.body.postNum) },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    )
    .then(() => {
      res.redirect(`/post/${req.body.postNum}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});
app.delete("/post/delete", (req, res) => {
  post
    .deleteOne({ _id: parseInt(req.body.postNum) })
    .then(() => {
      res.status(200).send("삭제 성공");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("삭제 실패");
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
