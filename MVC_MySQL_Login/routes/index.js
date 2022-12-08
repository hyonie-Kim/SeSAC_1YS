const express = require("express");
const user = require("../controller/userController");
const router = express.Router();

router.get("/", user.index);

module.exports = router;
