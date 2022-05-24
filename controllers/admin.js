const Product = require('../models/product');
exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    //note path:admin/add-product can be any name path:'/dadf/afjadj
    res.render('admin/add-product',{pageTitle:'Add Product',path:'/admin/add-product',formCSS:true,productCSS:true,activeAddProduct:true}); // to render html file this is the name of html file
}
exports.getAdminProducts = (rea,res,next)=>{
  Product.fetchAll((products)=>{
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
     
    });
});
}
exports.getAdminEditProduct = (rea,res,next)=>{
  res.render('admin/edit-product',{pageTitle:'Edit-Product',path:'/edit-product'});
}

exports.postAddProduct = (req,res,next) =>{
    const product = new Product(req.body.title);
    product.save();
      // console.log(req.body); //it will return the body of request
      //products.push({title:req.body.title}); //pushing the data in to array
      // console.log(products);
      res.redirect('/'); // after pushing the data in to array we will redirected to root
}