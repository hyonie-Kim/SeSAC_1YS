var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); // router 변수 쓰임 - 주소정의
router.post("/login", controller.login);

// router 내보내기 - 전역에서 사용가능 
module.exports = router;