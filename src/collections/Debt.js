const { Schema, model } = require('mongoose');

const incomeSchema = new Schema({
    date: Date,
    amount: Number
});

const debtSchema = new Schema({

    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        default: null,
        required: true
    },

    sale: {
        type: Schema.Types.ObjectId,
        ref: 'Sale',
        default: null,
        required: true
    },

    income: {
        type: [incomeSchema],
    },

    remainingBalance: {
        type: Number,
        default: 0,
        required: ['Invalid remaining balance']
    },

    paymentMade: {
        type: Number,
        default: 0,
        required: ['Invalid payment made']
    },
  
    active: {
      type: Boolean,
      default: true
    }
  });
  
  const Debt = model('Debt', debtSchema);
  
  module.exports = Debt;
