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
  // res.send(String(result.id));
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
  // res.render("profile");
  User.findOne({
    where: { id: "sesac" }, // 핑 req.session
  }).then((result) => {
    console.log(result);
    res.render("profile", { data: result });
    // console.log(true);
  });

  //`SELECT * FROM user WHERE id='${id}' limit 1;`
  // User.get_user(req.body.id, function(result){
  //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
  //     else res.redirect("/user/signin");
  // })
};

exports.profile_post = (req, res) => {
  const form = new multiparty.Form({
    uploadDir: "public/image",
  });

  form.parse(req, (err, fields, files) => {
    console.log(fields);
    console.log(files.imageFile[0].path);

    // update
    res.render("profile", { data: result });
  });
};

exports.profile_edit = (req, res) => {
  console.log(req.file);
  let data = {
    name: req.body.name,
    pw: req.body.pw,
  };
  User.update(data, {
    where: { id: req.body.id },
  }).then(() => {
    res.send(true);
  });
};
// exports.userInfo = (req, res) => {
//   User.findOne({
//     where: { id: req.body.id },
//   }).then((result) => {
//     if (result) res.render("userInfo", { data: result });
//     else res.redirect("/signin");
//   });
// };

// exports.userInfo_edit = (req, res) => {
//   let data = {
//     name: req.body.name,
//     pw: req.body.pw,
//   };
//   User.update(data, {
//     where: { id: req.body.id },
//   }).then(() => {
//     res.send(true);
//   });
// };
// exports.userUpdate = (req, res) => {
//   //console.log(req.body);
//   const form = new multiparty.Form({
//     uploadDir: "public/image/",
//   });
//   form.parse(req, (err, fields, files) => {
//     // console.log(fields, files);
//     // let temp = {
//     //   name: req.body.Username,
//     //   pw: req.body.UserPw,
//     // };
//   });
// };
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
