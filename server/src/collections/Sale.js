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
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            colorId: {
                type: Schema.Types.ObjectId,
                required: true
            },
            sizeId: {
                type: Schema.Types.ObjectId,
                required: true
            }
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
    paymentFee: {
        type: Number,
        default: 0,
        required: true
    },
    paymentFeeApplied: {
        type: Number,
        required: true
    },
    totalWithFee: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: null
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
        const offset = now.getTimezoneOffset() * 60000;
        this.date = new Date(now.getTime() - offset);
    }
    next();
});

// Middleware para generar un número de orden único antes de guardar
saleSchema.pre('save', async function(next) {
    if (!this.orderNumber) {
        try {
            this.orderNumber = await getNextOrderNumber();
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