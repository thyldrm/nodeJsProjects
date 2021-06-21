exports.getIndexPage = (req,res)=>{
    res.render("index",{
        page_name : "index"
    });
}

exports.getAboutPage = (req,res)=>{
    res.render("about",{
        page_name : "about"
    });
}

exports.getTrainerPage = (req,res)=>{
    res.render("trainer",{
        page_name : "trainer"
    });
}


exports.getContactPage = (req,res)=>{
    res.render("contact",{
        page_name : "contact"
    });
}