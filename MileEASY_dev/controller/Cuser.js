const passport = require("passport");
const { User2 } = require("../model");

// const alreadyLogin = (req, res, next) => {
//   if (req.session.userId) res.status(400).send("이미 로그인 하셨습니다.");
//   else next();
// };

exports.login = (req, res) => {
  if (req.session.userId) res.status(400).send("이미 로그인 하셨습니다.");
  else res.render("user/login.ejs", { message: req.flash("message") }); // user폴더 > login.ejs 파일
};

exports.loginPost = (req, res) => {
  passport.authenticate("local", {
    failureRedirect: "/user/login",
  });

  res.redirect("/");

  // User2.findOne({
  //   where: { userId: req.body.userId },
  // }).then((userInfo) => {
  //   if (!userInfo) {
  //     req.flash("message", "입력한 아이디가 없습니다.");
  //     res.redirect("/user/login");
  //   } else {
  //     if (userInfo.userPw != req.body.userPw) {
  //       req.flash("message", "비밀번호가 일치하지 않습니다.");
  //       res.redirect("/user/login");
  //     } else {
  //       //로그인 성공
  //       console.log(req.body);
  //       req.session.userId = req.body.userId;
  //       req.session.userName = userInfo.name;
  //       res.redirect("/user/mypage");
  //     }
  //   }
  // });
};

exports.register = (req, res) => {
  if (req.session.userId) res.status(400).send("이미 로그인 하셨습니다.");
  else res.render("user/register", { message: req.flash("message") });
};

exports.registerPost = async (req, res) => {
  let temp = {
    name: req.body.name,
    userId: req.body.userId,
    userPw: req.body.userPw,
  };
  await User2.findOne({
    where: { userId: req.body.userId },
  }).then((userInfo) => {
    console.log(Boolean(userInfo));
    if (userInfo) {
      req.flash("message", "동일한 아이디가 있습니다.");
      res.redirect("/user/register");
    } else {
      let result = User2.create(temp).then((result) => {
        console.log(result);
        res.redirect("/user/login");
      });
    }
  });

  // res.send(result.id);
};

exports.mypage = (req, res) => {
  console.log("궁금해ㅐ:" + req.userId);
  if (req.session.userId) {
    // res.send(req.session.userName);
    res.render("user/mypage");
  } else {
    res.redirect("/user/login");
  }
};

// exports.mypage = (req, res) => {
//   if (req.session.userId) {
//     User2.findOne({
//       where: { userId: req.body.userId },
//     }).then((userInfo) => {
//       console.log(userInfo);
//       res.render("user/mypage", { data: userInfo });
//       // res.send(req.session.userName);
//     });
//   } else {
//     res.redirect("/user/login");
//   }
// };
