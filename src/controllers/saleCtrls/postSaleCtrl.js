require('../../db.js');
const Sale = require('../../collections/Sale.js');
const postDebtCtrl = require('../../controllers/debtCtrls/postDebtCtrl.js');

const postSaleCtrl = async (paymentMethod, installments, soldAt, discount, products, client, paymentFee, debtAmount, shipment) => {

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
    };

    const newSale = {
        paymentMethod,
        installments,
        soldAt,
        discount,
        products,
        subTotal,
        discountApplied,
        totalPrice,
        paymentFee,
        paymentFeeApplied,
        totalWithFee,
        client: client || null,
        shipment
    };

    const saleCreated = await Sale.create(newSale);

    if (debtAmount !== '' && !isNaN(debtAmount) && saleCreated){

        if (isNaN(debtAmount)) {
            return res.status(400).send({ error: 'Incorrect DataType - debtAmount should be a valid number' });
        };

        const saleId = saleCreated._id;

        if (!saleId) {
            return res.status(400).send({ error: 'No sale ID found for a new debt.' });
        };

        const newDebt = await postDebtCtrl(saleId, Number(debtAmount));

        if (!newDebt) {
            return res.status(400).send({ error: 'Error creating a debt.' });
        };

        if (newDebt) {
            return saleCreated;
        };
    };

    return saleCreated;
};

module.exports = postSaleCtrl;