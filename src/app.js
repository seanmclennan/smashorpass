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

connectDB("mongodb://whiteb1r:Vnknd23yYK9MBcc@cluster0-shard-00-00.qjfic.mongodb.net:27017,cluster0-shard-00-01.qjfic.mongodb.net:27017,cluster0-shard-00-02.qjfic.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-s82vzo-shard-0&authSource=admin&retryWrites=true&w=majority")

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
app.use(express.static(path.join(__dirname, "client", "build", "index.html")))


app.use(notFound)
app.use(errorHandlerMiddleware)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

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