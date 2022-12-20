const { User } = require("../model");
const multiparty = require("multiparty");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signup_post = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  let result = await User.create(data);

  // console.log(result);
  res.send(result.id);
  // res.redirect("/");
};

exports.signIn = (req, res) => {
  res.render("signin");
};

exports.signIn_post = (req, res) => {
  User.findOne({
    where: { id: req.body.id, pw: req.body.pw },
  }).then((result) => {
    if (result) {
      res.send(true);
      console.log(result.id);
    } else {
      res.send(false);
    }
  });
};

exports.profile = (req, res) => {
  res.render("profile");
};
exports.profile_upload = (req, res) => {
  //console.log(req.body);
  const form = new multiparty.Form({
    uploadDir: "public/image/",
  });
  form.parse(req, (err, fields, files) => {
    // console.log(fields, files);
    // let temp = {
    //   name: req.body.Username,
    //   pw: req.body.UserPw,
    // };
  });
};
// 회원가입
// exports.signup = async (req, res) => {
//   let data = {
//     id: req.body.id,
//     pw: req.body.pw,
//     name: req.body.name,
//   };
//   let result = await User.create(data);
//   console.log(result);
//   console.log(result.id);
//   res.send(result.id);
// };

// 로그인

// exports.login = (req, res) => {
//   User.findOne({
//     where: { id: req.body.id, pw: req.body.pw },
//   }).then((result) => {
//     if (result) res.send(true);
//     else res.send(false);
//   });
// };
