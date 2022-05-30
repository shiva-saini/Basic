const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Cart = sequelize.define('cart',{
  id:{
    type : Sequelize.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  }
})

module.exports = Cart;






















































// const path = require('path');
// const fs = require('fs');
// const p = path.join(__dirname,'../','data','cart.json');

// module.exports = class Cart {
//     static addProduct(id,productPrice) {
//         fs.readFile(p,(err,filecontent)=>{
//             let cart = {products:[],totalPrice:0};
//             if(!err){
//                 cart = JSON.parse(filecontent);
//             }

//             const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
//             const existingProduct = cart.products[existingProductIndex];
//             let updatedProduct;
//             if(existingProduct){
//                 updatedProduct = { ...existingProduct };
//                 updatedProduct.qty = updatedProduct.qty + 1;
//                 cart.products = [ ...cart.products ];
//                 cart.products[existingProductIndex] = updatedProduct;
//                 //if i have an existing prooduct then i dont want ot add new product instead i want to replace old one for that i need the index of existing product  using findIndex function in js
//             }else{
//                 // add new cart product
//                 updatedProduct = {id:id,qty:1};
//                 cart.products = [ ...cart.products , updatedProduct ];
//             }
//             // now i will add price i dont know the price of a prduct so i will get ///it as argument
//             cart.totalPrice = cart.totalPrice + +productPrice;
//             fs.writeFile(p,JSON.stringify(cart),(err)=>{
//                    console.log(err);
//             })

//         })
//             //fetch the previous cart
//             //analyze the cart and fetch the existing product
//             // add new product / increase the quantity
//     }


//     static deleteProduct(id, productPrice) {
//         fs.readFile(p, (err, fileContent) => {
//           if (err) {
//             return;
//           }
//           const updatedCart = { ...JSON.parse(fileContent) };
//           const product = updatedCart.products.find(prod => prod.id === id);
//           if(!product){
//             return;
//           }
//           const productQty = product.qty;
//           updatedCart.products = updatedCart.products.filter(
//             prod => prod.id !== id
//           );
//           updatedCart.totalPrice =
//             updatedCart.totalPrice - productPrice * productQty;
    
//           fs.writeFile(p, JSON.stringify(updatedCart), err => {
//             console.log(err);
//           });
//         });
//       }

//       static getCart(cb) {
//         fs.readFile(p, (err, fileContent) => {
//           const cart = JSON.parse(fileContent);
//           if (err) {
//             cb(null);
//           } else {
//             cb(cart);
//           }
//         });
//       }

//       static getCartProduct(cb){
//         fs.readFile(p, (err, fileContent) => {
//          const cart = JSON.parse(fileContent);
//          if(err){
//            cb(null);
//          }else{
//            cb(cart);
//          }
//         })
//       } 
// }