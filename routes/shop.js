const router = require("express").Router();
const path = require("path");
const adminData = require("./admin"); //importing the data array from the damin file //////to shor that data here in this file

router.get("/", (req, res, next) => {
  //it will render the shop html file to client side
  //path can be any name
  let products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop:true,
    productCSS:true
  });
});

module.exports = router;
