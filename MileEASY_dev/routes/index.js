var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controller.signup);
router.post("/signup", controller.signup_post);

router.get("/signIn", controller.signIn);
router.post("/signIn", controller.signIn_post);

router.get("/profile", controller.profile);
router.post("/profile", controller.profile_post);
router.patch("/profile/edit", controller.profile_edit);
// router.delete("/profile/delete", user.profile_delete);

module.exports = router;
