require('../../db.js');
const Sale = require('../../collections/Sale.js');

const postSaleCtrl = async (paymentMethod, installments, soldAt, discount, products, client, paymentFee) => {

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
        client: client || null
    };

    const saleCreated = await Sale.create(newSale);

    return saleCreated;
};

module.exports = postSaleCtrl;



// Obtengo los productos desde la base de datos usando sus IDs
// const productsID = await Product.find({ '_id': { $in: products } });

// Calculo el precio total sumando los precios de los productos
// const subTotal = productsID.reduce((total, product) => total + product.price, 0);