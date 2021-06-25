const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require('slugify');

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
    slug: {
        type:String,
        unique: true,
      }
});

WorkoutSchema.pre('validate', function(next){
    this.slug = slugify(this.name, {
      lower:true,
      strict:true
    })
    next();
  })

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;