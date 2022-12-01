var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.visitor); // router 변수 쓰임 - 주소정의
router.post("/register", controller.register);

// router 내보내기 - 전역에서 사용가능 
module.exports = router;