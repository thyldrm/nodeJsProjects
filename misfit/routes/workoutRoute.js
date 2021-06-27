const express = require("express");
const workoutController = require("../controllers/workoutController");
const roleMiddleware = require("../middlewares/roleMiddlewares")

const router = express.Router();

router.route("/").post(roleMiddleware(["trainer","admin"]), workoutController.createWorkout);
router.route("/").get(workoutController.getAllWorkouts);
router.route('/:slug').get(workoutController.getWorkout);


module.exports=router;