const express = require('express')
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found')
const images = require('./routes/images')
const ImageModel = require('./models/image')
const app = express();
require('dotenv').config()
const cors = require('cors');

app.use(cors());

connectDB(process.env.MONGO_URI)

// middleware
//app.use(express.static("../client/public"))

// routes
app.use(express.json())
app.use('/api/v1/cards', images)

// app.post('/createCard', async (req, res) => {
//     console.log(req.body)
// })

//app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();