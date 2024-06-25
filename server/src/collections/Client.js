const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
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

    shopping: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Sale'
        }
    ],

    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    
    active: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Client', clientSchema);
