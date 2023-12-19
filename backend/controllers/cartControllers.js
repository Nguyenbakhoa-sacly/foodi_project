

const Cart = require('../models/Cart');

const cartControllers = {

  // add to cart
  NewCartItem: async (req, res) => {
    const {
      menuItemId, email, quantity,
      name, price, image
    } = req.body
    try {
      // create a new cart item
      const newCartItem = await new Cart({
        menuItemId: menuItemId,
        email: email,
        quantity: quantity,
        name: name,
        image: image,
        price: price
      })
      const cartItem = await newCartItem.save();
      res.status(200).json(cartItem);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  // get all cart by email
  getAllCartItems: async (req, res) => {
    const { email } = req.query;
    try {
      const cartItem = await Cart.find({ email: email })
      res.status(200).json(cartItem)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  },

  // delete Cart
  deleteCartItem: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Cart.findByIdAndDelete({ _id: id });
      // Nếu không tìm thấy sản phẩm, trả về lỗi
      if (!product) {
        return res.status(400).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' })
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  },

  // update cart quantity
  updataCartItems: async (req, res) => {
    const { id } = req.params;
    const { quantity, price } = req.body;
    try {
      const result = await Cart.findById({ _id: id })
      // Nếu không tìm thấy sản phẩm, trả về lỗi
      if (!result) {
        return res.status(400).json({ message: 'Product not found' });
      }
      // Cập nhật số lượng sản phẩm
      result.quantity = quantity;
      // result.price = price;
      await result.save();
      // Trả về phản hồi thành công
      res.status(200).json({ message: 'Product updated successfully!!!' });
    } catch (e) {
      res.status(500).json({ message: 'Product updated failed!!!' });
    }
  }
}

module.exports = cartControllers