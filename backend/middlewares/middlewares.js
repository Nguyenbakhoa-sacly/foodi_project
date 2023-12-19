

const jwt = require('jsonwebtoken');

const middlewares = {
  // verify jwt token
  // middleware
  verifyToken: async (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).json(
        { message: "Unauthorized access!" });
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY,
      (err, decoded) => {
        if (err) {
          return res.status(403).json(
            { message: " Token is not valid!" })
        }
        req.decoded = decoded;
        next();
      })
  }
}
module.exports = middlewares