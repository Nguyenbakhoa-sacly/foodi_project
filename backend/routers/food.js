

const router = require('express').Router();
const userController = require('../controllers/foodControllers');

// get all menu
router.get('/menu', userController.getAllMenu);
// new item cart
router.post('/carts', userController.NewCartItem);
// get all items cart
router.get('/carts', userController.getAllCartItems);
// delete item cart
router.delete('/carts/:id', userController.deleteCartItem);
// update carts quantity
router.put('/carts/:id', userController.updataCartItems);





module.exports = router