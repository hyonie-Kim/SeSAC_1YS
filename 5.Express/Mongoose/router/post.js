var express = require("express");
var router = express.Router();

const { Post } = require("../Model/post");
const { Counter } = require("../Model/counter");

router.post("/upload", (req, res) => {
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

router.get("/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("detail", { postInfo: docInfo });
    });
});

// 수정
router.get("/edit/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("edit", { postInfo: docInfo });
    });
});

// 수정기능
router.post("/edit", (req, res) => {
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
router.delete("/delete", (req, res) => {
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

module.exports = router;
