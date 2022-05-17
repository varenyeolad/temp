function  checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect("/main")
    }
    next();
}

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/SignIn")
}

module.exports = {
    checkNotAuthenticated,
    checkAuthenticated
}