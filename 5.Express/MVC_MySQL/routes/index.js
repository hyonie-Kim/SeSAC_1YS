var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router(); //router 변수 쓰임 - 주소정의

router.get("/", controller.visitor); // localhost:8003/visitor
router.post("/register", controller.register); //localhost:8003/visitor/register
router.delete("/delete", controller.delete); //localhost:8003/visitor/delete
router.get("/get_visitor", controller.get_visitor_by_id);
router.patch("/update", controller.update_visitor);

// router 내보내기 - 전역에서 사용가능 
module.exports = router;