require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Product = require('../../collections/Product.js');


const postSaleCtrl = async (orderNumber, paymentMethod, soldAt, discount, products, client) => {

    // Obtengo los productos desde la base de datos usando sus IDs
    const productsID = await Product.find({ '_id': { $in: products } });

    // Calculo el precio total sumando los precios de los productos
    const subTotal = productsID.reduce((total, product) => total + product.price, 0);
    
    // Calculo el descuento aplicado
    const discountApplied = (subTotal * discount) / 100;

    // Calculo el precio total después de aplicar el descuento
    const totalPrice = subTotal - discountApplied;
    
    const newSale = {
        orderNumber,
        paymentMethod,
        soldAt,
        discount,
        products,
        subTotal,
        discountApplied,
        totalPrice,
        client
    }

    const saleCreated = await Sale.create(newSale);

    return saleCreated;
};

module.exports = postSaleCtrl;