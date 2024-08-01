require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Product = require('../../collections/Product.js');

const postSaleCtrl = async (paymentMethod, installments, soldAt, discount, products, client, paymentFee) => {
    // Extraigo los IDs de producto únicos de `products`
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