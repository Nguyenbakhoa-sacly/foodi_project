
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    // username không được trùng nhau
    // unique: true,
    required: true
  },
  email: {
    type: String, required: true,
    // email không được trùng nhau
    // unique: true,
    trim: true,
  },
  photoURL: { type: String },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
},
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)