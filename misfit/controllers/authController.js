const bcrypt = require('bcrypt');
const User = require("../models/User")
const Category = require("../models/Category")

exports.createUser = async (req,res) => {
    try {

        const user = await User.create(req.body);
        res.status(201).redirect("/login")
    
    }catch (error) {
        res.status(400).json({
            status:"fail",
            error
        });
    }
};

exports.userLogin = async (req,res) => {
    try {
       const {email, password} = req.body;

       await User.findOne({email}, (err,user) => {
           if (user) {
            bcrypt.compare(password, user.password, (err,same) => {
                if (same) {
                    //user session
                    req.session.userID = user._id;
                    res.status(200).redirect("/users/dashboard");
                }
            })
           }
       })

    }catch {
        res.status(400).json({
            status:"fail",
            error
        });
    }
};

exports.logoutUser = (req,res) => {
    req.session.destroy(()=>{
        res.redirect("/");
    })
}

exports.getDashboardPage = async (req,res)=>{
    const user = await User.findOne({_id:req.session.userID})
    const categories = await Category.find();
    res.render("dashboard",{
        page_name : "dashboard",
        user,
        categories
    });
}