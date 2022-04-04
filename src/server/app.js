const express = require('express')
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found')
const images = require('./routes/images')
const ImageModel = require('./models/image')
const path = require('path')
const app = express();
require('dotenv').config()
const cors = require('cors');

app.use(cors());

connectDB(process.env.MONGO_URI)

// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, '../client/src/uploads')
//     },

//     fileName: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// })

// const upload = multer({storage: storage})

// routes
app.use(express.json())
app.use('/api/v1/cards', images)


app.use(notFound)
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