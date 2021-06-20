const express = require("express");
const pageController = require("../controllers/pageControllers");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/index").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/trainer").get(pageController.getTrainerPage);
router.route("/gallery").get(pageController.getGalleryPage);
router.route("/contact").get(pageController.getContactPage);

module.exports=router;