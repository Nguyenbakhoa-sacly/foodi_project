const router = require('express').Router();
const userController = require('../controllers/userControllers')
const middlewares = require('../middlewares/middlewares')
// get all users
router.get('/',
  // middlewares.verifyToken,
  userController.getAllUsers);
// post a new user
router.post('/', userController.createUser);
// delete a user
router.delete('/:id', userController.deleteUser);
// get admin
// router.get('/admin/:email', userController.getAdmin);
// make admin of a user 
router.put('/admin/:id', userController.makeAdmin)
module.exports = router