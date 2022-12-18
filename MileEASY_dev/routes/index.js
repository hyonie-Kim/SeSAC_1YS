var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.signup);
router.post("/signup", controller.signup_post);
router.get("/signIn", controller.signIn);
router.post("/signIn", controller.signIn_post);

module.exports = router;
