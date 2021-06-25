const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.createUser);
router.route("/login").post(authController.userLogin);
router.route("/logout").get(authController.logoutUser);

module.exports=router;