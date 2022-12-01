var express = require("express"); //express 모듈 불러오기
var controller = require("../controller/Cmain"); //상대경로로 가져오기
const router = express.Router(); // 라우터 변수에 express.Router 저장

router.get("/", controller.main); // router 변수 쓰임 - 주소정의
router.get("/test", controller.test);

router.post("/postForm", controller.post);


// router 내보내기 - 전역에서 사용가능 
module.exports = router;
