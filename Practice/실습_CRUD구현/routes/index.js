var express = require("express");
var controller = require("../controller/Clogin");
const router = express.Router();

router.get("/", controller.login);
router.get("/join", controller.join);
router.post("/join", controller.joinReult)

module.exports = router;