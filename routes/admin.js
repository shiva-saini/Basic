
const router = require('express').Router(); //to get router for routing
const path = require('path'); // path module for using path.join to join whole dir

const adminController = require('../controllers/admin.js')
router.get('/products',adminController.getAdminProducts)
router.get('/edit-product',adminController.getAdminEditProduct)

router.get('/add-product',adminController.getAddProduct)

router.post('/add-product', adminController.postAddProduct)

module.exports = router; // exporting routes for fouting this file in othe file
