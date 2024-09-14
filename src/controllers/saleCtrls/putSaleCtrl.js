require('../../db.js');
const Sale = require('../../collections/Sale.js');

const putSaleCtrl = async (_id, products, discount, paymentFee) => {

    const subTotal = products.reduce((total, product) => {
        return total + (product.price || 0); // Asegúrate de que cada producto tenga una propiedad price
    }, 0);


    let totalPrice = subTotal;
    let discountApplied = 0;

    if (discount) {
        discountApplied = (subTotal * discount) / 100;
        totalPrice = subTotal - discountApplied;
    }

    let totalWithFee = totalPrice;
    let paymentFeeApplied = 0;

    if (paymentFee) {
        paymentFeeApplied = (totalPrice * paymentFee) / 100;
        totalWithFee = totalPrice - paymentFeeApplied;
    }

    const updated = await Sale.updateOne(
        { _id }, 
        {
            $set: {
                products,
                discount,
                subTotal,
                discountApplied,
                totalPrice,
                paymentFee,
                paymentFeeApplied,
                totalWithFee
            }
        }
    );
    return updated;
};

module.exports = putSaleCtrl;