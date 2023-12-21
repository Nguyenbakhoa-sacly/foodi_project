

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
  // Create new a product
  createNewProduct: async (req, res) => {
    const { name, recipe, image, category, price } = req.body;
    try {
      // create a new cart item
      const newProduct = await new Product({
        name: name,
        image: image,
        price: price,
        recipe: recipe,
        category: category
      })
      const productItem = await newProduct.save();
      res.status(200).json(productItem);
      // nho lam tra ra cac san pham lien quan nua nha
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  // detail product
  detailProduct: async (req, res) => {
    const { id } = req.params
    console.log(`Detail Product: ${id}`)
    try {
      const idProduct = await Product.findById({ _id: id });
      // console.log(idProduct.category)
      if (!idProduct) {
        return res.status(404).json(
          { message: 'Detail Product not found!' })
      }
      res.status(200).json(idProduct)
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = productController