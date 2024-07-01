// src/collections/Sale.js

const mongoose = require('mongoose');
const getNextOrderNumber = require('../utils/getNextOrderNumber.js');

const { Schema, model } = mongoose;

const paymentMethodEnum = ['Efectivo', 'Crédito', 'Débito', 'Transferencia'];
const saldAtEnum = ['Online', 'Local'];

const saleSchema = new Schema({
    orderNumber: {
        type: String,
        unique: true
    },

    //client siempre va a haber uno solo así que no era necesario que sea array. También cambié el default a null porque no se puede declara que el tpye va a ser un ObjectID y luego reemplazarlo por un string
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        default: null
    },


    //lo mismo con paymentMethod, salvo que una venta se pague con más de un método, en ese caso no sé si enum será el formato que tendríamos que usar
    paymentMethod: {
        type: String,
        enum: paymentMethodEnum,
        required: true
    },

    //acá tampoco tiene sentido usar array, siempre va a ser uno u otro
    soldAt: {  
        type: String,
        enum: saldAtEnum,
        required: true,
        message: 'Invalid sold at Online/Local'
    },
  
    discount: {
        type: Number,
        default: 0,
        required: true
    },
  
    products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
    ],
  
    subTotal: {
        type: Number,
        required: true
    },
  
    discountApplied: {
        type: Number,
        required: true
    },
  
    totalPrice: {
        type: Number,
        required: true
    },
  
    date: {
        type: Date,
        default: null,
    },
    active: {
        type: Boolean,
        default: true
    }
});

// Middleware para ajustar la fecha antes de guardar
saleSchema.pre('save', function(next) {
    if (!this.date) {
        const now = new Date();
        // Ajusta la fecha a la zona horaria de Argentina
        const offset = now.getTimezoneOffset() * 60000;
        this.date = new Date(now.getTime() - offset);
    }
    next();
});

saleSchema.pre('save', async function(next) {
    if (!this.orderNumber) {
        try {
            this.orderNumber = await getNextOrderNumber();
            console.log('Generated Order Number:', this.orderNumber); // Añadir esta línea
            if (!this.orderNumber) {
                throw new Error('Failed to generate order number');
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});


module.exports = model('Sale', saleSchema);