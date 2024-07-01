// src/collections/Sale.js

const mongoose = require('mongoose');
const getNextOrderNumber = require('../utils/getNextOrderNumber.js');

const { Schema, model } = mongoose;

const paymentMethodEnum = ['Efectivo', 'Crédito', 'Débito', 'Transferencia'];
const saldInEnum = ['Online', 'Local'];

const saleSchema = new Schema({
    orderNumber: {
        type: String,
        unique: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        default: null
    },
    paymentMethod: {
        type: String,
        enum: paymentMethodEnum,
        required: true
    },
    soldAt: {
        type: String,
        enum: saldInEnum,
        required: true
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
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
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
