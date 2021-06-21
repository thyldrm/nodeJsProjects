const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    difficulty: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;