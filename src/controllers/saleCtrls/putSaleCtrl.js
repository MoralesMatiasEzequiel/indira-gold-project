require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Product = require('../../collections/Product.js');

const putSaleCtrl = async (_id, products, discount, paymentFee) => {

    const uniqueProductIds = [...new Set(products.map(p => p.productId))];

    // Obtengo los productos desde la base de datos usando sus IDs únicos
    const productsFromDB = await Product.find({ '_id': { $in: uniqueProductIds } });

    // Calculo el precio total sumando los precios de los productos considerando las repeticiones
    const subTotal = products.reduce((total, product) => {
        const productFromDB = productsFromDB.find(p => p._id.toString() === product.productId.toString());
        return total + (productFromDB ? productFromDB.price : 0);
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