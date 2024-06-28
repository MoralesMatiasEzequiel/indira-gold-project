const { Schema, model } = require('mongoose');

const paymentMethodEnum = ['Efectivo', 'Credito', 'Debito', 'Transferencia'];
const saldInEnum = ['Online', 'Local'];

const saleSchema = new Schema({

    orderNumber: {
        type: String,
        unique: true,
        require: true,
        message: 'Invalid orderNumber'
    },

    client: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Client',
            default: 'Anónimo'
        }
    ],

    paymentMethod: {
        type: [{
            type: String,
            enum: paymentMethodEnum
          }],
          required: true,
          message: 'Invalid paymentMethod'
    },

    soldIn: {  
        type: [{
            type: String,
            enum: saldInEnum
          }],
          required: true,
          message: 'Invalid sold in Online/Local'
    },

    discount: {
        type: Number,
        require: true,
        default: 0,
        message: 'Invalid discount'
    },

    products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
    ],

    totalPrice: {
        type: Number,
        require: true,
        message: 'Invalid totalPrice'
    },

    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    
});


module.exports = model('Sale', saleSchema);