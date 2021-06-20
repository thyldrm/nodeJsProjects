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

exports.getGalleryPage = (req,res)=>{
    res.render("gallery",{
        page_name : "gallery"
    });
}

exports.getContactPage = (req,res)=>{
    res.render("contact",{
        page_name : "contact"
    });
}