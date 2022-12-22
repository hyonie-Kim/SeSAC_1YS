const express = require("express");
const app = express();
const port = 8000;

const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const router = require("./routes");
const userRouter = require("./routes/user");

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/static"));
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(
//   session({
//     secret: "MySecret",
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize()); //passport 앱에서 사용, 초기화
// app.use(passport.session()); // 세션을 passport에서 사용
// app.use(flash());

// const checkSession = (req, res, next) => {
//   console.log(req.session); // 세션에 어떤 정보가 저장되어있는지 출력
//   next();
// };
// app.use(checkSession);

app.use("/", router);
app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, () => {
  console.log("server open: ", port);
});
