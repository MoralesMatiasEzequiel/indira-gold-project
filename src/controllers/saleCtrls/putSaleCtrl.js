require('../../db.js');
const Sale = require('../../collections/Sale.js');

const putSaleCtrl = async (_id, products, discount, paymentFee, subtotal) => {

    let newSubTotal = 0;

    const existingSale = await Sale.findById(_id);
    if (!existingSale) {
        throw new Error('Sale not found');
    }

    const previousProducts = existingSale.products.reduce((acc, product) => {
        acc[product.productId] = product.price;
        return acc;
    }, {});

    const adjustedProducts = products.map(product => {
        if (previousProducts[product.productId]) {
            return {
                ...product,
                price: previousProducts[product.productId]
            };
        }
        return product;
    });

    let subTotalFromProducts = products.reduce((total, product) => {
        return total + (product.price || 0);
    }, 0);

    if(subtotal) {
        newSubTotal = subtotal;
        products = adjustedProducts;
    } else {
        newSubTotal = subTotalFromProducts;
    }

    let totalPrice = newSubTotal;
    let discountApplied = 0;

    if (discount) {
        discountApplied = (newSubTotal * discount) / 100;
        totalPrice = newSubTotal - discountApplied;
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
                subTotal: newSubTotal,
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