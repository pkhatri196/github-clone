export async function ensureAuthenticated(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }

    //if not authenticated
    res.redirect(process.env.CLIENT_BASE_URL + "/login");
}