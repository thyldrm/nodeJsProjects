const express = require("express");
const pageController = require("../controllers/pageController");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/index").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/trainer").get(pageController.getTrainerPage);
router.route("/contact").get(pageController.getContactPage);

module.exports=router;