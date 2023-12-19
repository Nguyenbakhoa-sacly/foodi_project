
const User = require('../models/User')

const userController = {

  // get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  // post a new user
  createUser: async (req, res) => {
    const { name, email, photoURL, role } = req.body;
    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(302).json(
          { message: 'User already exists!' });
      };
      const newUser = await new User({
        name: name,
        email: email,
        photoURL: photoURL,
        role: role
      });
      const createUser = await newUser.save();
      res.status(200).json(createUser);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  //  delete a user 
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      // xóa người dùng
      const deleteUser = await User.findByIdAndDelete(
        { _id: id });
      // kiểm trả người dùng tồn tại chưa
      if (!deleteUser) {
        return res.status(400).json(
          { message: 'User not found!' });
      }
      res.status(200).json(
        { message: "Delete user successfully!" });
    } catch (err) {
      return res.status(500).json(
        { message: err.message });
    }
  },

  // get admin
  getAdmin: async (req, res) => {
    const { email } = req.params;
    try {
      const user = await User.findOne({ email: email });
      console.log("user: ", user)
      console.log("decoded: ", req.decoded.email)
      if (email !== req.decoded.email) {
        return res.status(403).send(
          { message: "Forbidden access!" })
      }
      // set default admin = false
      let admin = false;
      if (user) {
        // kiem ta co phi quan tri vien hay kkhong
        admin = user?.role === "admin";
      }
      res.status(200).json({ admin });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // make admin of a user
  makeAdmin: async (req, res) => {
    const { id } = req.params;
    const { name, email, photoURL, role } = req.body;
    try {
      const updateUser = await User.findByIdAndUpdate(
        id,
        // mongoose tra ve doi tuowng vua cap nhat
        { role: 'admin' },
        // mongoose thuc thi cac rang buoc trong schema
        { new: true, runValidators: true }
      )
      if (!updateUser) {
        return res.status(400).json({ message: 'User not found!' });
      };
      return res.status(200).json(updateUser)
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = userController