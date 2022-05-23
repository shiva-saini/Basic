
const router = require('express').Router(); //to get router for routing
const path = require('path'); // path module for using path.join to join whole dir
let products = [] // array for collecting all incoming data in to array

router.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    //note path:admin/add-product can be any name path:'/dadf/afjadj
    res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product',formCSS:true,productCSS:true,activeAddProduct:true}); // to render html file this is the name of html file
})

router.post('/add-product', (req,res,next) =>{
    // console.log(req.body); //it will return the body of request
    products.push({title:req.body.title}); //pushing the data in to array
    // console.log(products);
    res.redirect('/'); // after pushing the data in to array we will redirected to root
})

exports.routes = router; // exporting routes for fouting this file in othe file
exports.products = products; // exporting the array of collected data