const express = require("express");
const controller = require("../controller/cookieController");
const router = express.Router();

router.get("/cookie-parser", controller.index);
// router.get("/cookie", controller.modal);
// router.post("/setpopup", controller.setpopup);
router.get("/getCookie", controller.getCookie);
router.get("/checkCookie", controller.checkCookie);
router.get("/clearCookie", controller.clearCookie);
router.get("/Unique_clearCookie", controller.Unique_clearCookie);

router.get("/", controller.sessionMain);
router.post("/", controller.postLogin);

router.get("/signin", controller.sessionLogin);
router.delete("/signin", controller.logout);

module.exports = router;
