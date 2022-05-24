const router = require("express").Router();
const path = require("path");
//const adminData = require("../controllers/products.js"); //importing the data array from the damin file //////to shor that data here in this file
const shopController = require('../controllers/shop.js')

router.get("/", shopController.getIndex);
router.get("/cart", shopController.getProductCart);
router.get("/checkout", shopController.getCheckOut);
router.get("/products", shopController.getProducts);
router.get("/product-detail", shopController.getProductDetail);

module.exports = router;
