const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        message: 'Invalid name'
    },

    color: {
        type: Object,
        require: true,
        message: 'Invalid name'
    },

    price: {
        type: Number,
        require: true,
        message: 'Invalid price'
    },
            
    category: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Category'
        }
    ],

    imageGlobal: {
        type: String
    },
    
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Product', productSchema);