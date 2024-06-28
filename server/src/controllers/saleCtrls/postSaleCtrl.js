require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Product = require('../../collections/Product.js');


const postSaleCtrl = async (orderNumber, paymentMethod, soldIn, discount, products) => {

    // Obtengo los productos desde la base de datos usando sus IDs
    const productsID = await Product.find({ '_id': { $in: products } });

    // Calculo el precio total sumando los precios de los productos
    const totalPrice = productsID.reduce((total, product) => total + product.price, 0);
    const newSale = {
        orderNumber,
        paymentMethod,
        soldIn,
        discount,
        products,
        totalPrice
    }

    const saleCreated = await Sale.create(newSale);

    return saleCreated;
};

module.exports = postSaleCtrl;