//let products = [] // array for collecting all incoming data in to array

const Product = require('../models/product');
const Cart = require('../models/cart');
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

  exports.getProduct = (req,res,next)=>{
    const prodId = req.params.productId;
    Product.findById(prodId,product =>{
      res.render('shop/product-detail',{product:product,pageTitle:product.title,path:'/products'})
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
       Cart.getCartProduct(cart =>{
        Product.fetchAll(products => {
          const cartProducts = [];
            for(p of products){
              let cartProductData = cart.products.find(prod => prod.id === p.id);
              if(cartProductData){
                  cartProducts.push({productData : p, qty : cartProductData.qty})
              }
            }

            res.render('shop/cart',{pageTitle:'Your Cart',path:'/cart',prods:cartProducts});
          })

        })
       
      
}

exports.postCart = (req,res,next)=>{
   const prodId = req.body.productId;
   Product.findById(prodId,(product)=>{
     Cart.addProduct(prodId,product.price);
     
   })
   res.redirect('/');
   
}

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};  

exports.postCartDeleteProduct = (req,res,next)=>{
      const prodId = req.body.productId;
      Product.findById(prodId,(product)=>{
            Cart.deleteProduct(prodId,product.price);
            res.redirect('/cart');
      })

}

exports.getCheckOut = (req, res, next) => {
      res.render('shop/checkout',{pageTitle:'Checkout',path:'/checkout'});
}
// exports.getProductDetail = (req, res, next) => {
//       res.render('shop/product-detail',{pageTitle:'Product-Detail',path:'/product-detail'});
// }

exports.getOrders = (req,res,next)=>{
  res.render('shop/orders',{pageTitle:'Your Orders',path:'/orders'});
}


//exports.products = products; // exporting the array of collected data