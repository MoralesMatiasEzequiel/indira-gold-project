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
        
    description: String,
    
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