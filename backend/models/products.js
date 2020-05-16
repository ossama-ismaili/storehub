const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', Product);