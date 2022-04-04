const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const ImageModel = mongoose.model("image", ImageSchema);
module.exports = ImageModel;