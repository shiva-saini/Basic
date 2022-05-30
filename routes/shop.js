const router = require("express").Router();
const path = require("path");
//const adminData = require("../controllers/products.js"); //importing the data array from the damin file //////to shor that data here in this file
const shopController = require('../controllers/shop.js')

router.get("/", shopController.getIndex);

router.get("/products/:productId",shopController.getProduct );

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.post("/create-order", shopController.postOrder);


router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckOut);

router.get("/products", shopController.getProducts);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);


module.exports = router;
