const express = require("express");
const user = require("../controller/userController");
const router = express.Router();

router.get("/", user.index);

router.get("/signup", user.signup);

module.exports = router;
