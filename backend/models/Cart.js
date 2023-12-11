const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

  menuItemId: { type: String, required: true },
  email: { type: String, required: true },
  quantity: { type: Number, required: true },
  name: { type: String, trim: true, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }

},
  { timestamps: true }
)

module.exports = mongoose.model('Cart', cartSchema)