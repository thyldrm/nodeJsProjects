const express = require("express");
const pageController = require("../controllers/pageController");
const redirectMidlleware = require("../middlewares/redirectMiddleware")

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/index").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/trainer").get(pageController.getTrainerPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/register").get(redirectMidlleware, pageController.getRegisterPage);
router.route("/login").get(redirectMidlleware, pageController.getLoginPage);


module.exports=router;