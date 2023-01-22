const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const moment = require("moment");
moment.locale("ko");
dotenv.config({ path: "../../.env" });

const app = express();
const port = process.env.PORT;
const MongoURL = process.env.MONGO_URL;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// 라우팅 경로

app.get("/", (req, res) => {
  // post
  //   .find()
  //   .toArray()
  //   .then((postData) => {
  //     res.render("index", { postData: postData });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.render("index", { postData: [] });
  //   });
});

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/post/upload", (req, res) => {
  // console.log(req.body);
  // counter
  //   .findOne({ name: "counter" })
  //   .then((counterInfo) => {
  //     post
  //       .insertOne({
  //         _id: counterInfo.postNum,
  //         title: req.body.title,
  //         content: req.body.content,
  //         date: new Date(),
  //       })
  //       .then(() => {
  //         counter
  //           .findOneAndUpdate(
  //             { name: "counter" },
  //             {
  //               $inc: { postNum: 1 },
  //             }
  //           )
  //           .then(() => {
  //             res.redirect("/");
  //             // res.send("글 저장에 성공하였습니다.");
  //           });
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.send("글 저장에 실패하였습니다.");
  //   });
});

app.get("/post/:postNum", (req, res) => {
  // // console.log(typeof req.params.postNum);
  // post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
  //   //doc.date = moment(doc.date).format("MMMM Do YYYY, h:mm:ss a");
  //   res.render("detail", { postInfo: doc });
  // });
});

// 수정
app.get("/post/edit/:postNum", (req, res) => {
  // post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
  //   res.render("edit", { postInfo: doc });
  // });
});

// 수정기능
app.post("/post/edit", (req, res) => {
  // post
  //   .findOneAndUpdate(
  //     {
  //       _id: parseInt(req.body.postNum),
  //     },
  //     {
  //       $set: {
  //         title: req.body.title,
  //         content: req.body.content,
  //       },
  //     }
  //   )
  //   .then(() => {
  //     res.redirect(`/post/${req.body.postNum}`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.redirect(`/`);
  //   });
});
// 삭제기능
app.delete("/post/delete", (req, res) => {});

// 404 페이지
app.all("*", (req, res) => {
  res.status(404).send("찾을수 없는 페이지입니다.");
});

// MongoClient.connect(process.env.MongoURL, (err, database) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//     db = database.db("Express");
//     post = db.collection("post s");
//     counter = db.collection("counter");
//   }
// });
