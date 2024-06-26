const { Schema, model } = require('mongoose');

const measurementSchema = new Schema({
    width: String,
    length: String,
    rise: String
});

const sizeSchema = new Schema({
    sizeName: {
        type: String,
        required: true
    },
    measurements: [measurementSchema],
    code: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

const colorSchema = new Schema({
    colorName: {
        type: String,
        required: true
    },
    size: [sizeSchema],
    image: String
});

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Invalid name']
    },
    color: {
        type: [colorSchema],
        required: [true, 'Invalid color']
    },
    price: {
        type: Number,
        required: [true, 'Invalid price']
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    imageGlobal: String,
    description: String,
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Product', productSchema);
