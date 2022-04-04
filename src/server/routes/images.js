const express = require('express')
const router = express.Router()

const {
    getAllImages,
    createImage,
    getImage,
    deleteImage
} = require('../controllers/images')

router.route('/').get(getAllImages).post(createImage)
router.route('/:id').get(getImage).delete(deleteImage)

module.exports = router
