const Workout = require("../models/Workout")
const Category = require("../models/Category")

exports.createWorkout = async (req,res) => {
    try {
        const workout = await Workout.create(req.body);

        res.status(201).redirect("/workouts");
        

    }catch {
        res.status(400).json({
            status:"fail",
            error
        });
    }
};

exports.getAllWorkouts = async (req,res) => {
    try {

        const categorySlug = req.query.categories;

        const category = await Category.findOne({slug:categorySlug})

        let filter = {}

        if(categorySlug){
            filter = {category:category._id}
        }

        const workouts = await Workout.find(filter).sort('-createdAt');

        const categories = await Category.find();

        

        res.status(200).render("workouts",{
            workouts,
            categories,
            page_name : "workouts"
        })

    }catch {
        res.status(400).json({
            status:"fail",
        });
    }
};

exports.getWorkout = async (req, res) => {
    try {
      const workout = await Workout.findOne({slug: req.params.slug})
  
      res.status(200).render('workout', {
        workout,
        page_name: 'workouts',
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };