const ImageModel = require('../models/image')
const asyncWrapper = require('../middleware/async.js')
const createCustomError = require('../errors/custom-error')


const getAllImages = asyncWrapper(async (req, res) => {
  ImageModel.find({}, (err, result) => {
    if(err) {
      res.json(err);
    } else {
      res.json(result)
    }
  })
})

const createImage = asyncWrapper(async (req, res) => {
  const image = req.body;
  
  const newImage = new ImageModel(image);
  await newImage.save()

  console.log(req.body)

  res.json(image)
})

const getImage = asyncWrapper(async (req, res, next) => {
  const { id: imageID } = req.params
  const image = await ImageModel.findOne({ _id: imageID })
  if (!image) {
    return next(createCustomError(`No image with id : ${imageID}`, 404))
  }

  res.status(200).json({ image })
})
const deleteImage = asyncWrapper(async (req, res, next) => {
  const { id: imageID } = req.params
  const image = await ImageModel.findOneAndDelete({ _id: imageID })
  if (!image) {
    return next(createCustomError(`No image with id : ${imageID}`, 404))
  }
  res.status(200).json({ image })
})

module.exports = {
    getAllImages,
    createImage,
    getImage,
    deleteImage
}
