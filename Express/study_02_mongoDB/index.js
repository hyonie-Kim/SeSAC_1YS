const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const moment = require("moment");
//moment.locale("ko")

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = 3000;

var db, post, counter;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// 라우팅 경로
app.post("/post/edit", (req, res) => {
  //console.log(req.body);
  //res.status(200).send("요청성공");
  post
    .findOneAndUpdate(
      {
        _id: parseInt(req.body.postNum),
      },
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
      res.redirect(`/`);
    });
});
app.get("/", (req, res) => {
  post
    .find()
    .toArray()
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
                $inc: { postNum: 1 },
              }
            )
            .then(() => {
              res.redirect("/");
              // res.send("글 저장에 성공하였습니다.");
            });
        });
    })
    .catch((err) => {
      console.log(err);
      res.send("글 저장에 실패하였습니다.");
    });
});

// app.get("/calculator", (req, res) => {
//   console.log(typeof req.query.num1);
//   let result = Number(req.query.num1) + Number(req.query.num2);
//   res.send(`${req.query.num1} + ${req.query.num2} = ${result}`);
// });

// app.post("/calculator", (req, res) => {
//   //   console.log(req.body);
//   let result = Number(req.body.num1) + Number(req.body.num2);
//   res.render("result", { result: result });
// });

app.get("/post/:postNum", (req, res) => {
  // console.log(typeof req.params.postNum);
  post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
    //doc.date = moment(doc.date).format("MMMM Do YYYY, h:mm:ss a");
    res.render("detail", { postInfo: doc });
  });
});

app.get("/post/edit/:postNum", (req, res) => {
  post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
    res.render("edit", { postInfo: doc });
  });
});

// 404 페이지
app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지입니다.");
});

MongoClient.connect(process.env.MongoURL, (err, database) => {
  if (err) {
    console.log(err);
    return;
  } else {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    db = database.db("Express");
    post = db.collection("posts");
    counter = db.collection("counter");
  }
});
