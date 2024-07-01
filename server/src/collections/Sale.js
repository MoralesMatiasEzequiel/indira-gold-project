const { Schema, model } = require('mongoose');

const paymentMethodEnum = ['Efectivo', 'Crédito', 'Débito', 'Transferencia'];
const saldInEnum = ['Online', 'Local'];

const saleSchema = new Schema({

    orderNumber: {
        type: String,
        unique: true,
        require: true,
        message: 'Invalid orderNumber'
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
        required: true,
        message: 'Invalid paymentMethod'
    },

    //acá tampoco tiene sentido usar array, siempre va a ser uno u otro

    soldAt: {  
        type: String,
        enum: saldInEnum,
        required: true,
        message: 'Invalid sold in Online/Local'
    },

    discount: {
        type: Number,
        default: 0,
        require: true,
        message: 'Invalid discount'
    },

    products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
    ],

    subTotal: {
        type: Number,
        require: true,
        message: 'Invalid subTotal'
    },

    discountApplied: {
        type: Number,
        require: true,
        message: 'Invalid discountApplied'
    },

    totalPrice: {
        type: Number,
        require: true,
        message: 'Invalid totalPrice'
    },

    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    
    active: {
        type: Boolean,
        default: true
    }
    
});


module.exports = model('Sale', saleSchema);