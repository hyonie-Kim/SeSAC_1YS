const express = require("express");
const controller = require("../controller/cookieController")
const router = express.Router();

// router.get("/", controller.index);
// router.get("/cookie", controller.modal);
// router.post("/setpopup", controller.setpopup);

router.get("/", controller.sessionMain);
router.post("/", controller.postLogin)

router.get("/signin", controller.sessionLogin);
router.delete("/signin", controller.logout);


module.exports = router;