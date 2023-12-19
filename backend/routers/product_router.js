
const router = require('express').Router();

const productController = require('../controllers/productControllers');

// get all product
router.get('/product', productController.getAllProducts);
// create a new product
router.post('/product', productController.createNewProduct);
// detail the product
router.post('/product/:id', productController.detailProduct);

module.exports = router