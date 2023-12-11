

const router = require('express').Router();
const cartController = require('../controllers/cartControllers');

// new item cart
router.post('/carts', cartController.NewCartItem);
// get all items cart
router.get('/carts', cartController.getAllCartItems);
// delete item cart
router.delete('/carts/:id', cartController.deleteCartItem);
// update carts quantity
router.put('/carts/:id', cartController.updataCartItems);


module.exports = router