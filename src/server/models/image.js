const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    name: {
        type: String, 
    },
    age: {
        type: String,
    },
    image: {
        type: String,
    },
});

const ImageModel = mongoose.model("image", ImageSchema);
module.exports = ImageModel;