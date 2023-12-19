
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cartRoute = require('./routers/cart_router');
const productRoute = require('./routers/product_router');
const userRoute = require('./routers/user_router');
// const middlewares = require('./middlewares/middlewares')
const app = express();
const port = 5001;
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOBD_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Failed to connect to MongoDB'))

// jwt authentication
app.post('/jwt', async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.SECRET_KEY,
    { expiresIn: '2h' }
  )
  res.send({ "access_token": token });
})

app.get('/', (req, res) => {
  res.send('hello world');
})

app.use("/v1/food", cartRoute);
app.use("/v1/food", productRoute);
app.use("/v1/users", userRoute);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

