exports.get404 = (req,res,next)=>{
    //this router is for invalid request
    // res.status(404).sendFile(path.join(__dirname,'./','views','pagerr.html'));
    // res.status(404).send('<h1>page not found</h1>');
    res.render('404',{pageTitle:'error'});
}