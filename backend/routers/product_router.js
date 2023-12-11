
const router = require('express').Router();

const productController = require('../controllers/productControllers');

// get all product
router.get('/product', productController.getAllProducts);
// create a new product

module.exports = router