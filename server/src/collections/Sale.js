const { Schema, model } = require('mongoose');

const saleEnum = ['Online', 'Local'];

const saleSchema = new Schema({
    totalAmount: {
        type: Number,
        unique: true,
        require: true,
        message: 'Invalid totalAmount'
    },

    orderNumber: {
        type: Number,
        unique: true,
        require: true,
        message: 'Invalid orderNumber'
    },

    sale: {
        type: [{
            type: String,
            enum: saleEnum
          }],
          required: true,
          message: 'Invalid sale (online/local)'
    },

    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    
    client: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Client'
        }
    ],

    product: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
    ],
});


module.exports = model('Sale', saleSchema);