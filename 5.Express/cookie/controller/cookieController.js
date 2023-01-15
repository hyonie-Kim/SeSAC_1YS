exports.index = (req, res) => {
  res.render("index");
};

exports.getCookie = (req, res) => {
  // 브라우저가 cookie라는 이름의 test값을 쿠키로 저장하게 된다.
  // path 특정 url에만 쿠키가 발급됨
  res
    .cookie("cookie", "test", { path: "/cookie-parser", signed: true })
    .render("index");
};
exports.checkCookie = (req, res) => {
  // 쿠키를 확인하거나 값을 알고싶을 경우
  //console.log(req.cookies); // 오브젝트로 확인
  console.log(req.signedCookies);
  console.log(req.headers.cookie);
  res.render("index");
};
exports.clearCookie = (req, res) => {
  res.clearCookie("cookie").render("index");
};
// 특정 url 쿠키 삭제
exports.Unique_clearCookie = (req, res) => {
  res.clearCookie("cookie", { path: "/cookie-parser" }).render("index");
};

exports.expressSession = (req, res) => {
  res.render("session");
};

exports.session = (req, res) => {
  if (req.session.pageView) {
    req.session.pageView++;
  } else {
    req.session.pageView = 1;
  }
  res.send("이 페이지를" + req.session.pageView + "회 방문 했습니다.");
};
// 세션삭제
exports.deleteSessionAll = (req, res) => {
  req.session.destroy(() => {
    req.session;
    //req.session.pageView => 특정 세션 삭제
  });
  res.redirect("/session");
};
// exports.modal = (req, res) =>{
//     if(req.cookies.popup == "1") res.render("cookie", {pop:"none"});
//     else res.render("cookie", {pop:"block"})
// }

// exports.setpopup = (req, res) =>{
//     //1. 쿠기를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키생성 {popup: 1}
//     //2. 서버 응답

//     const option = {
//         httpOnly: true,
//         maxAge: 30000,

//     }

//     res.cookies("popup", "1", option);
//     res.send(true)
// }

exports.sessionMain = (req, res) => {
  res.render("session_login");
};
// exports.sessionMain = (req, res) =>{
//     console.log(req.session.user)
//     if (res. session.user) res.render("session_login", {isLogin: true});
//     else res.render("session_login", {isLogin: false});

// }

exports.sessionLogin = (req, res) => {
  res.render("session_signin", { id: req.session.user });
};

let user = {
  id: "sesac",
  pw: "1234",
};
exports.postLogin = (req, res) => {
  if (req.body.id == user.id && req.body.pw == user.pw) {
    req.session.user = req.body.id;
    res.send("로그인 성공");
  } else {
    res.send("로그인 실패");
  }
};

exports.logout = (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err;

    res.send("로그아웃 성공");
  });
};
