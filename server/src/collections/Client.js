const { Schema, model } = require('mongoose');

const paymentMethodEnum = ['Efectivo', 'Credito', 'Debito', 'Transferencia'];

const clientSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true,
        message: 'Invalid name'
    },

    lastname: {
        type: String,
        unique: true,
        require: true,
        message: 'Invalid lastname'
    },

    email: {
        type: String,
        unique: true,
        require: true,
        message: 'Invalid email'
    },

    telephone: {
        type: Number,
        unique: true,
        require: true,
        message: 'Invalid telephone'
    },

    paymentMethod: {
        type: [{
            type: String,
            enum: paymentMethodEnum
          }],
          required: true,
          message: 'Invalid paymentMethod'
    },

    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    
    sale: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Sale'
        }
    ],
    
    active: {
        type: Boolean,
        default: true
    }
});

const Client = model('Client', clientSchema);

module.exports = { Client, paymentMethodEnum };
// module.exports = model('Client', clientSchema);