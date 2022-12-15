var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.post("/signup", controller.signup);

module.exports = router;
