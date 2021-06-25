const express = require("express");
const workoutController = require("../controllers/workoutController");

const router = express.Router();

router.route("/").post(workoutController.createWorkout);
router.route("/").get(workoutController.getAllWorkouts);
router.route('/:slug').get(workoutController.getWorkout);


module.exports=router;