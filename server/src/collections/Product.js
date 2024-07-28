const { Schema, model } = require('mongoose');

const measurementSchema = new Schema({
    width: String,
    long: String,
    rise: String
});

const sizeSchema = new Schema({
    sizeName: {
        type: String,
        required: true
    },
    measurements: [measurementSchema],
    // code: {
    //     type: String,
    //     required: true
    // },
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

const supplierSchema = new Schema({
    name: String,
    phone: String
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
    // supplier: {
    //     type: [supplierSchema],
    // },
    imageGlobal: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Invalid price']
    },
    description: {
        type: String
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Product', productSchema);
