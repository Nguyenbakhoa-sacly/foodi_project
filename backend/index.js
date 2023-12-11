
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const foodRoute = require('./routers/food');

const app = express();
const port = 3001;
dotenv.config();


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOBD_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Failed to connect to MongoDB'))

app.use("/v1/food", foodRoute)


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

