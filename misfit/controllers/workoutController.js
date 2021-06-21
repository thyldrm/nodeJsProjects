const Workout = require("../models/Workout")

exports.createWorkout = async (req,res) => {
    try {
        const workout = await Workout.create(req.body);

        res.status(201).json({
            status:"success",
            workout,
        })

    }catch {
        res.status(400).json({
            status:"fail",
            error
        });
    }
};

exports.getAllWorkouts = async (req,res) => {
    try {
        const workouts = await Workout.find();

        res.status(200).render("workouts",{
            workouts,
            page_name : "workouts"
        })

    }catch {
        res.status(400).json({
            status:"fail",
        });
    }
};