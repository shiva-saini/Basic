//let products = [] // array for collecting all incoming data in to array

const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    //it will render the shop html file to client side
    //path can be any name
    // let products = adminData.products;
    Product.fetchAll((products)=>{
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "ALL Products",
        path: "/products",
        
      });
    });
   
  }

exports.getIndex = (req, res, next) => {
      Product.fetchAll((products)=>{
            res.render("shop/index", {
              prods: products,
              pageTitle: "ALL Products",
              path: "/",
             
            });
     });
}



exports.getProductCart = (req, res, next) => {
      res.render('shop/cart',{pageTitle:'Cart',path:'/cart'});
}

exports.getCheckOut = (req, res, next) => {
      res.render('shop/checkout',{pageTitle:'Checkout',path:'/checkout'});
}
exports.getProductDetail = (req, res, next) => {
      res.render('shop/product-detail',{pageTitle:'Product-Detail',path:'/product-detail'});
}


//exports.products = products; // exporting the array of collected data