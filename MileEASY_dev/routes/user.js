var express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var controller = require("../controller/Cuser");
const { User2 } = require("../model");
const router = express.Router();

// // 로그인 성공, 유저의 아이디를 가지고 세션을 만들고, 쿠키로 브라우저 전송
// passport.serializeUser(function (user, done) {
//   done(null, user.userId);
// });

// // 세션에 저장된 아이디를 가지고, user doc 찾아서 req.user 라는 곳에 저장
// passport.deserializeUser(function (id, done) {
//   User2.findOne({ userId: id }).then((userInfo) => {
//     done(null, userInfo);
//   });
// });

module.exports = () => {
  // 로그인 성공 시 쿠키와 id만 들고있는다.
  passport.serializeUser((user, done) => {
    // null - 서버 에러
    // user.id - 성공해서 user의 id를 가져온다.
    done(null, user.id);
  });

  // 서버에서 유저에 대한 모든 정보를 갖고 있게되면, 서버 과부화가 생기게된다.
  // 그래서 서버는 id만 갖고있다가, 페이지 이동 시 필요한 유저 정보는 DB에서 찾아서 가져온다.
  // 그게 deserializeUser 역할이다.
  passport.deserializeUser(async (userId, done) => {
    // DB에서 정보를 찾으면 req.user로 넣어준다.
    try {
      const user = await User.findOne({ where: { userId } });
      done(null, user); // done 시 callback
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};

passport.use(
  // 로그인할때 유저가 입력한아이디, 로그인할떄 유저가 패스워드
  new LocalStrategy(
    {
      usernameField: "userId",
      passwordField: "userPw",
    },
    function (userId, userPw, done) {
      const user = User2.findOne({ where: { userId } }, function (err, user) {
        // mysql에러
        if (err) {
          return done(err);
        }
        // 사용자가 입력한 아이디에 해당하는 유저가 없을 때
        if (!user) {
          req.flash("message", "입력한 아이디가 없습니다.");
          return done(null, false);
        }
        // 사용자가 입력한 비밀번호가 틀렷을때
        if (userPw != user.userPw) {
          req.flash("message", "비밀번호가 일치하지 않습니다.");
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "userId", // req.body.email 라고 명시적으로 알려줌 (정확한 명을 넣어야한다.)
        passwordField: "userPw",
      },
      async (userId, userPw, done) => {
        // 함수가 추가된다.
        try {
          const user = await User.findOne({
            // 로그인 시도에서 이메일 있는 조건으로 찾아보기.
            where: { userId },
          });
          if (!user) {
            // passport에서는 res로 응답이 아닌, 우선 done으로 처리를 한다.
            return done(null, false, { reason: "아이디가 일치하지 않습니다." });
          }
          if (userPw != user.userPw) {
            req.flash("message", "비밀번호가 일치하지 않습니다.");
            return done(null, false);
          }
        } catch (err) {
          console.error(err);
          return done(err); // done의 첫번째 인자는 서버 에러시 넣는다.
        }
      }
    )
  );
};

router.get("/login", controller.login);
router.post("/login", controller.loginPost);

router.get("/register", controller.register);
router.post("/register", controller.registerPost);

router.get("/mypage", controller.mypage);

module.exports = router;
