const { Schema, model } = require('mongoose');

const clientSchema = new Schema({

    dni: {
        type: String,
        require: true,
        unique: true,
        message: 'Invalid DNI'
    },

    name: {
        type: String,
        require: true,
        message: 'Invalid name'
    },

    lastname: {
        type: String,
        require: true,
        message: 'Invalid lastname'
    },

    email: {
        type: String,
        require: true,
        message: 'Invalid email'
    },

    phone: {
        type: String,
        require: true,
        message: 'Invalid telephone'
    },

    purchases: [
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
            },
        }
    ],

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
clientSchema.pre('save', function(next) {
    if (!this.date) {
        const now = new Date();
        // Ajusta la fecha a la zona horaria de Argentina
        const offset = now.getTimezoneOffset() * 60000;
        this.date = new Date(now.getTime() - offset);
    }
    next();
});


module.exports = model('Client', clientSchema);
