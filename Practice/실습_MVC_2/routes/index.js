const express = require("express");
const controller = require("../controller/Cuser")
const router = express.Router();

router.get("/login", controller.login);
router.post("/login", controller.loginPost);

router.post("/login2", controller.loginPost2);

module.exports = router;
