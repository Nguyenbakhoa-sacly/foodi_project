

const Product = require('../models/Product');

const productController = {
  // get all  products
  getAllProducts: async (req, res) => {
    try {
      const menu = await Product.find();
      res.status(200).json(menu);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
}

module.exports = productController