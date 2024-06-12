const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true,
        message: 'Invalid name'
    },

    color: {
        type: [String],
        message: 'Invalid color array'
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